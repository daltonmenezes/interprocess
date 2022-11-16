import { getPublicPath } from 'shared/utils'
import { library } from './library'

export const meta = {
  title: `interprocess - ${library.description}`,
  description: `A scalable and type-safe Electron IPC management tool with enhanced DX`,

  twitter: {
    site: `@daltonmenezes`,
  },

  image: {
    url: getPublicPath(`/social.png`),
    width: '1200',
    height: '630',
  },
}
