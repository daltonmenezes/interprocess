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
        const ProvidedHandler = props['renderer']![key]

        if (!listener && ProvidedHandler) {
          return ipcRenderer.on(key as string, ProvidedHandler)
        }

        return ipcRenderer.on(key as string, async function (_, ...args) {
          const handler = listener as any

          const response = await handler(
            _,
            { [key]: ProvidedHandler, data: args[0] },
            ...args
          )

          _.sender.send(key as string, response)
        })
      },
    }
  }, {} as RendererHandle<RendererKeys, Renderer>)

  return handlers
}
