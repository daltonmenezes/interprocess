import { getType, toObjectTree, unslugify } from 'shared/utils'

interface TreeProps {
  sections: string[][]
  renderLinks?: (section: string) => JSX.Element[]
}

export function Tree({ sections, renderLinks }: TreeProps) {
  function render(tree: Object) {
    return Object.entries(tree).map(([section, children]) => {
      const sectionName = unslugify(section)
      const hasChildren = getType(children) === 'object'

      if (hasChildren) {
        return (
          <ul key={section}>
            <span>{sectionName}</span>

            <ul>
              <li>{render(children)}</li>
            </ul>
          </ul>
        )
      }

      return (
        <ul key={section}>
          <span>{sectionName}</span>
          <div>{renderLinks && renderLinks(section)}</div>
        </ul>
      )
    })
  }

  return <>{render(toObjectTree(sections))}</>
}
