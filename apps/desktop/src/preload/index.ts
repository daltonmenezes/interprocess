import { exposeApiToGlobalWindow } from 'shared/ipcs'

declare global {
  interface Window {
    [key]: typeof api
  }
}

const { key, api } = exposeApiToGlobalWindow({
  exposeAll: true,

  append: {
    hello: 'world',
    sayHello(param: 'opa') {
      console.log('hello ' + param)
    },
  },
})
