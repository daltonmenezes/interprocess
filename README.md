<p align="center">
  <a href="#interprocess">
    <img alt="preview" src="https://github.com/daltonmenezes/interprocess/raw/main/apps/web/public/banner.svg" width="100%">
  </a>
</p>

<h3 align="center"><strong>interprocess</strong>: 💬 A scalable and type-safe Electron IPC management tool with enhanced DX</h3>

<p align="center">
  <!-- GitHub -->
  <a href="https://github.com/sponsors/daltonmenezes">
    <img alt="github url" src="https://img.shields.io/badge/support%20on-github-1C1E26?style=for-the-badge&labelColor=1C1E26&color=ff7ac8"/>
  </a>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=50e1c7"/>
  </a>
  <!-- Version -->
  <a href="https://github.com/daltonmenezes/interprocess/releases">
     <img alt="releases url" src="https://img.shields.io/npm/v/interprocess.svg?style=for-the-badge&labelColor=1C1E26&color=ff7ac8"/>
  </a>  
  <!-- License -->
  <a href="https://github.com/daltonmenezes/interprocess/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=50e1c7"/>
  </a>
</p>

> Electron IPC is good, but difficult to maintain and scale, either because of the numerous channels you have to remember, or because of the inconsistent API between processes and the absence of inferred types of your channels and handlers. These are some of the things that interprocess comes to solve!

# 💬 Features
- 🚀 Best-in-class DX with a fully-typed API
- 🧠 Enchanced and consistent API
- 🔥 Type-safe and scalable
- 🪄 Code splitting support
- 🕸️ All edges connected (APIs to handle all processes)
- 💖 `invoke` and `handle` methods in both processes with the same expected behavior

# 💬 Installation
In your terminal, run:
```bash
yarn add interprocess

# OR

npm i interprocess
```

# 💬 Usage

Let's build something simple that can show you some of the interprocess's power!

First, create the following folders at `src`:

- `shared/ipcs` (this folder structure is optional)

Then, create a file named as `index.ts` in the `ipcs` folder with the following content:

```ts
import { createInterprocess } from 'interprocess'

const ipcs = createInterprocess({
  main: {
    async getPing(_, data: 'ping') {
      const message = `from renderer: ${data} on main process`
      
      console.log(message)

      return message
    },
  },

  renderer: {
    async getPong(_, data: 'pong') {
      const message = `from main: ${data} on renderer process`
      
      console.log(message)

      return message
    },
  },
})

export const {
  ipcMain,
  ipcRenderer,
  exposeApiToGlobalWindow
} = ipcs
```

On the main process:

```ts
import { BrowserWindow, app } from 'electron'
import { ipcMain } from 'shared/ipcs'

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  ipcMain.handle.getPing()

  mainWindow.on('ready-to-show', () => {
    ipcMain.invoke.getPong(mainWindow, 'pong')
  })
})
```

In the preload script:

```ts
import { exposeApiToGlobalWindow } from 'shared/ipcs'

const { key, api } = exposeApiToGlobalWindow({
  exposeAll: true, // expose handlers, invokers and removers,
})

declare global {
  interface Window {
    [key]: typeof api
  }
}
```
On the renderer process:
```ts
const { invoke, handle } = window.api

invoke.getPing('ping')
handle.getPong()
```
This is a simple way to work with interprocess, but there's a lot of more cool features you can take advantage, like overrides, code splitting, invoker's response (for renderer and main process 🎉) and more. See the [Knowledge section for more](#-knowledge)

# 💬 Knowledge
- [Docs](https://daltonmenezes.github.io/interprocess/docs/getting-started/overview)

- Examples
  - [Executable](https://github.com/daltonmenezes/interprocess/tree/main/apps/desktop)
  - [CodeSandbox (simple)](https://codesandbox.io/s/simple-607b6h?file=/src/ipcs.ts)
  - [CodeSandbox (advanced)](https://codesandbox.io/s/advanced-4qh0xb?file=/src/ipcs.ts)


# 💬 Contributing
> **Note**: contributions are always welcome, but always **ask first**, — please — before work on a PR.

That said, there's a bunch of ways you can contribute to this project, like by:

- :beetle: Reporting a bug
- :page_facing_up: Improving the docs
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on GitHub Sponsors or Patreon
- :bug: Funding an issue on IssueHunt
- :star2: Giving a star on this repository

# License

[MIT © Dalton Menezes](https://github.com/daltonmenezes/interprocess/blob/main/LICENSE)
