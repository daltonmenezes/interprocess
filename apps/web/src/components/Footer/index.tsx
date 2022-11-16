import React from 'react'

import { ExternalLink, Layout } from 'components'
import { library } from 'shared/constants'

import {
  AuthorBox,
  FooterContent,
  FooterContainer,
  LicenseContainer,
  FooterLinksContainer,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <Layout>
        <FooterContent>
          <FooterLinksContainer>
            <AuthorBox>
              <LicenseContainer>
                Released under the <strong>{library.license} License</strong>
              </LicenseContainer>

              <div>
                Created by
                <ExternalLink href={library.author.url}>
                  {library.author.name}
                </ExternalLink>
                💜
              </div>
            </AuthorBox>
          </FooterLinksContainer>
        </FooterContent>
      </Layout>
    </FooterContainer>
  )
}
