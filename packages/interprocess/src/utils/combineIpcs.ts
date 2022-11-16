import { createInterprocess } from '../factories'

import type { Merge, NormalizeCombinedIPCs } from '../types'

export function combineIpcs<T extends { main?: Object; renderer?: Object }[]>(
  ...props: [...T]
) {
  const ipcs = props?.reduce(
    (acc, current: any) => ({
      ...acc,
      main: {
        ...acc.main,
        ...current.main,
      },

      renderer: {
        ...acc.renderer,
        ...current.renderer,
      },
    }),
    { main: {}, renderer: {} }
  ) as Merge<T[number]>

  return createInterprocess(ipcs as NormalizeCombinedIPCs<T, typeof ipcs>)
}
