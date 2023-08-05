import { library } from './library'

export const commands = {
  npm: `npm i ${library.name}`,
  pnpm: `pnpm i ${library.name}`,
  yarn: `yarn add ${library.name}`,
} as const
