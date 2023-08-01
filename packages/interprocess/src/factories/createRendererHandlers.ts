import { ipcRenderer } from 'electron'

import type {
  IPCRenderer,
  ProcessKeys,
  IPCFactoryProps,
  RendererHandler,
} from '../types'

import { IPC } from '../utils/ipcs'

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

  const handlers = Object.keys(props.renderer!).reduce(
    (acc, currentChannel) => {
      const ipcChannel = currentChannel as RendererKeys

      return {
        ...acc,

        [ipcChannel]: async (
          listener?: RendererHandler<
            typeof ipcChannel,
            Renderer[typeof ipcChannel]
          >
        ) => {
          const registeredHandler = props['renderer']![ipcChannel]
          const providedHandler = listener as any

          ipcRenderer.invoke(IPC.INTERNAL.SYNC_AVAILABLE_RENDERER_IPCS, {
            type: 'add',
            key: ipcChannel,
          })

          return ipcRenderer.on(ipcChannel, async function (_, ...args) {
            let response

            if (providedHandler) {
              response = await providedHandler(
                _,
                { [ipcChannel]: registeredHandler, data: args[0] },
                ...args
              )
            }

            if (!providedHandler && registeredHandler) {
              response = await registeredHandler(_, args[0])
            }

            _.sender.send(ipcChannel, response)
          })
        },
      }
    },
    {} as RendererHandle<RendererKeys, Renderer>
  )

  return handlers
}
