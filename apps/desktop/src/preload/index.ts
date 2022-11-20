import { exposeApiToGlobalWindow } from 'shared/ipcs'

const { key, api } = exposeApiToGlobalWindow({
  // expose handlers, invokers and removers to the global window object
  exposeAll: true,

  // append methods and properties to the api (override method will not affect the append data)
  append: {
    hello: 'world',

    sayHello(param: 'world') {
      console.log('hello ' + param)
    },
  },
})

declare global {
  interface Window {
    [key]: typeof api
  }
}
