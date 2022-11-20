import Link from 'next/link'

import { library } from 'shared/constants'

import {
  Title,
  GitHubIcon,
  FixedHeader,
  Description,
  ExternalLink,
  LayoutSpacing,
  LibraryVersion,
  InstallationBox,
} from 'components'

import { Layout } from './styles'
import { getPublicPath } from 'shared/utils'

export function Header() {
  return (
    <Layout>
      <LayoutSpacing>
        <FixedHeader>
          <LibraryVersion />

          <Link href="/docs/getting-started/overview" passHref>
            <a>Docs</a>
          </Link>

          <Link href="/docs/getting-started/installation" passHref>
            <a>Install</a>
          </Link>

          <ExternalLink
            href={library.url}
            title="Go to interprocess GitHub repository"
          >
            <GitHubIcon aria-hidden />
          </ExternalLink>
        </FixedHeader>
      </LayoutSpacing>

      <LayoutSpacing size="small" />

      <Title>interprocess</Title>

      <Description>
        <img
          src={getPublicPath('/bidirectional-arrows.svg')}
          alt=""
          width="19"
          height="19"
          aria-hidden
        />{' '}
        {library.description}
      </Description>

      <LayoutSpacing size="small" />

      <InstallationBox />

      <LayoutSpacing size="small" />
    </Layout>
  )
}
