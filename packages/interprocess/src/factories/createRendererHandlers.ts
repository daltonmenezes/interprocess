import { ipcRenderer } from 'electron'

import type {
  IPCRenderer,
  ProcessKeys,
  IPCFactoryProps,
  RendererHandler,
} from '../types'

type RendererHandle<
  RendererKeys extends string,
  Renderer extends {
    [Property in RendererKeys]: Renderer[Property]
  }
> = {
  [Property in RendererKeys]: RendererHandler<Property, Renderer[Property]>
}

export function createRendererHandlers<T extends IPCFactoryProps<T>>(props: T) {
  type Renderer = IPCRenderer<typeof props['renderer']>
  type RendererKeys = ProcessKeys<Renderer>

  const handlers = Object.keys(props.renderer!).reduce((acc, current) => {
    const key = current as RendererKeys

    return {
      ...acc,

      [key]: async (
        listener?: RendererHandler<typeof key, Renderer[typeof key]>
      ) => {
        const registeredHandler = props['renderer']![key]
        const providedHandler = listener as any

        return ipcRenderer.on(key as string, async function (_, ...args) {
          let response

          if (providedHandler) {
            response = await providedHandler(
              _,
              { [key]: registeredHandler, data: args[0] },
              ...args
            )
          }

          if (!providedHandler && registeredHandler) {
            response = await registeredHandler(_, args[0])
          }

          _.sender.send(key as string, response)
        })
      },
    }
  }, {} as RendererHandle<RendererKeys, Renderer>)

  return handlers
}
