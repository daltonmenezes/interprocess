import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import { resolve } from 'path'

const tsconfigPaths = tsconfigPathsPlugin({
  projects: [resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
  },

  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
  },

  renderer: {
    plugins: [tsconfigPaths],

    server: {
      port: 4927,
    },
  },
})
