import type { IPCFactoryProps } from '../types'

export function createIpcSlice<T extends IPCFactoryProps<T>>(props: T) {
  return props
}
