export type IPCMainEvent = Electron.IpcMainInvokeEvent
export type IPCRendererEvent = Electron.IpcRendererEvent
export type BrowserWindow = Electron.BrowserWindow

export type SyncAvailableIpcsOperation = 'add' | 'remove'

export type IPCMain<T> = IPC<T, IPCMainEvent>
export type IPCRenderer<T> = IPC<T, IPCRendererEvent>

export type String<T extends string> = T | Omit<string, T>

export type ProcessKeys<P> = keyof P extends string ? keyof P : never

export type Merge<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

export type TypeAssertion<Target, Type, Fallback> = Target extends Type
  ? Target
  : Fallback

export type StringAssertion<Target, Fallback> = TypeAssertion<
  Target,
  string,
  Fallback
>

export type NormalizeCombinedIPCs<
  T extends Object[],
  S extends Merge<T[number]>
> = {
  [K in keyof S]: S[K]
}

export type IPC<Type = {}, Event = Electron.Event> = {
  [Property in keyof Type]: Type[Property] extends (
    event: Event,
    value: infer V
  ) => infer R
    ? Type[Property]
    : never
}

export type IPCFactoryProps<T extends Record<string, unknown>> = {
  main?: {
    [K in keyof T['main']]?: (event: IPCMainEvent, args: any) => Promise<any>
  }

  renderer?: {
    [K in keyof T['renderer']]?: (
      event: IPCRendererEvent,
      args: any
    ) => Promise<any>
  }
}

export type MainHandler<Key, Target> = Target extends (
  event: IPCMainEvent,
  value: infer V
) => infer R
  ? (
      handler?: (
        event: IPCMainEvent,
        handler: { [K in Key extends string ? Key : string]: Target } & {
          data: V
        },
        ...rest: any[]
      ) => R
    ) => void
  : never

export type RendererHandler<Key, Target> = Target extends (
  event: IPCRendererEvent,
  value: infer V
) => infer R
  ? (
      handler?: (
        event: IPCRendererEvent,
        handler: { [K in Key extends string ? Key : string]: Target } & {
          data: V
        },
        ...rest: any[]
      ) => R
    ) => void
  : never

export type APIHandlers<H, I, R> = {
  handle: H
  invoke: I
  remove: R
}

export type APIExpose<
  H,
  I,
  R,
  S extends (handlers: APIHandlers<H, I, R>) => any,
  Key,
  Append extends any
> = {
  apiKey?: String<Key extends string ? Key : any>
  exposeAll?: boolean
  append?: {
    [K in keyof Append]: Append[K]
  }
  override?: (handlers: APIHandlers<H, I, R>) => ReturnType<S>
}

export type API<
  Handle,
  Invoke,
  Remove,
  APIConfig extends Record<string, unknown>
> = APIExpose<
  Handle,
  Invoke,
  Remove,
  (handlers: APIHandlers<Handle, Invoke, Remove>) => any,
  '',
  APIConfig['append']
>
