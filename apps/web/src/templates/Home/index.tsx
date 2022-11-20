import {
  Head,
  Header,
  Layout,
  LayoutSpacing,
  CodeEditorPresenterSection,
} from 'components'

import { FeatureSection } from './Features'
import { meta } from 'shared/constants'

export function HomeTemplate() {
  return (
    <Layout>
      <Head meta={meta} />
      <Header />

      <CodeEditorPresenterSection />

      <LayoutSpacing size="small" />

      <FeatureSection />

      <LayoutSpacing size="small" />
      <LayoutSpacing size="small" />
    </Layout>
  )
}
