import { useMDXComponents } from '@mdx-js/react'
import { HTMLAttributes } from 'react'

import { Description } from 'components'
import { CodeBox } from './CodeBox'

import { SingleTick, Title } from './styles'

type MDXComponent = ReturnType<typeof useMDXComponents>

export function createMDXComponents(): MDXComponent {
  return {
    h1: Title,
    p: Description,

    pre: (props: any) => {
      if (!props?.children?.props?.className) {
        return <SingleTick {...(props as HTMLAttributes<HTMLSpanElement>)} />
      }

      return <pre {...props} />
    },

    code: (props) => {
      const language = props?.className?.replace('language-', '')

      if (!props?.className) {
        return <code {...props} />
      }

      return <CodeBox language={language} {...props} />
    },
  }
}
