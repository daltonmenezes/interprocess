export function toObjectTree(array: string[][]) {
  function createObjectTree(array: string[][], state = {}): Object {
    return array.reduce((acc, current) => {
      const [key, ...children] = current
      const nextState = acc?.[key as keyof typeof acc]
      const hasChildren = children.length > 0

      return {
        ...acc,

        [key]: hasChildren ? createObjectTree([children], nextState) : null,
      }
    }, state)
  }

  return (() => createObjectTree(array))()
}
