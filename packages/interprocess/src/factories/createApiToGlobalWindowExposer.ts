import { contextBridge } from 'electron'

import type { API } from '../types'

const defaultAPIConfig = {
  apiKey: 'api',
  exposeAll: false,
} as const

export function createApiToGlobalWindowExposer<Handle, Invoke, Remove>(
  rendererHandle: Handle,
  rendererInvoke: Invoke,
  rendererRemove: Remove
) {
  function exposeApiToGlobalWindow<
    APIConfig extends API<Handle, Invoke, Remove, APIConfig>
  >(props: APIConfig = defaultAPIConfig as unknown as APIConfig) {
    const { apiKey, exposeAll, append } = Object.assign(defaultAPIConfig, props)

    const defaultAPI = { invoke: rendererInvoke, ...append }

    const restrictedAPIs = {
      handle: rendererHandle,
      remove: rendererRemove,
    }

    const allAPIs = { ...restrictedAPIs, ...defaultAPI }

    const allApisWithoutAppend = {
      ...restrictedAPIs,
      invoke: rendererInvoke,
    }

    const api = exposeAll ? allAPIs : defaultAPI

    const publicApi = props.override
      ? { ...props.override(allApisWithoutAppend), ...append }
      : api

    contextBridge.exposeInMainWorld(
      apiKey || defaultAPIConfig.apiKey,
      publicApi
    )

    const key = apiKey as APIConfig['apiKey'] extends string
      ? APIConfig['apiKey']
      : typeof defaultAPIConfig.apiKey

    type APIReturn = APIConfig['override'] extends Function
      ? ReturnType<APIConfig['override']>
      : APIConfig['exposeAll'] extends true
      ? typeof allAPIs
      : typeof defaultAPI

    return {
      key,
      api: publicApi as APIReturn & typeof append,
    }
  }

  return exposeApiToGlobalWindow
}
