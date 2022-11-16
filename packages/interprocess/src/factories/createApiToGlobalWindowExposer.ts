import { contextBridge } from 'electron'

import type { API, StringAssertion } from '../types'

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

    const defaultAPI = Object.assign({ invoke: rendererInvoke }, append)

    const allAPIs = Object.assign(defaultAPI, {
      handle: rendererHandle,
      remove: rendererRemove,
    })

    const api = exposeAll ? allAPIs : defaultAPI

    contextBridge.exposeInMainWorld(apiKey || defaultAPIConfig.apiKey, api)

    const key = apiKey as StringAssertion<
      APIConfig['apiKey'],
      typeof defaultAPIConfig.apiKey
    >

    type APIReturn = APIConfig['override'] extends Function
      ? ReturnType<APIConfig['override']>
      : APIConfig['exposeAll'] extends true
      ? typeof allAPIs
      : typeof defaultAPI

    return {
      key,
      api: (props.override ? props.override(allAPIs) : api) as APIReturn,
    }
  }

  return exposeApiToGlobalWindow
}
