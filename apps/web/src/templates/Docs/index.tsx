import { useMDXComponents } from '@mdx-js/react'
import { useEffect, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { library, sizes } from 'shared/constants'
import { useMatchMedia } from 'hooks'

import {
  Title,
  Header,
  Section,
  Sidebar,
  Content,
  Article,
  MenuButton,
} from './styles'

import {
  Menu,
  Layout,
  GitHubIcon,
  DocLinkTree,
  FixedHeader,
  ExternalLink,
  LayoutSpacing,
  OuterClickArea,
  LibraryVersion,
  PaginationNavigator,
} from 'components'

import type { DocProps } from 'shared/types'

export function DocsTemplate({ doc, links, pagination }: DocProps) {
  const route = useRouter()
  const MDXComponents = useMDXComponents()
  const [menuOpen, setMenuOpen] = useState(false)

  const matchesMobileWidth = useMatchMedia(
    `(max-width: ${sizes.breakpoints.mobile}px)`
  )

  function handleMenuVisibility() {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [matchesMobileWidth, route.asPath])

  return (
    <Layout>
      <LayoutSpacing>
        <FixedHeader>
          <Header>
            <div>
              <MenuButton
                active={menuOpen}
                onClick={handleMenuVisibility}
                title={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <Menu />
              </MenuButton>

              <Link href="/" passHref>
                <a title="Go Back to Home">
                  <Title>interprocess</Title>
                </a>
              </Link>
            </div>

            <div>
              <LibraryVersion />

              <ExternalLink href={library.url}>
                <GitHubIcon />
              </ExternalLink>
            </div>
          </Header>
        </FixedHeader>
      </LayoutSpacing>

      <Section>
        <Sidebar visibility={menuOpen}>
          <DocLinkTree links={links} />
        </Sidebar>

        {menuOpen && <OuterClickArea onClick={handleMenuVisibility} />}

        <Content>
          {doc?.source && (
            <Article>
              <MDXRemote {...doc.source} components={MDXComponents} />
            </Article>
          )}

          <PaginationNavigator pagination={pagination} />
        </Content>
      </Section>
    </Layout>
  )
}
