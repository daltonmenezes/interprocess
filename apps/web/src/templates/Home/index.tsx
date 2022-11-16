import { Head, Header, Layout, LayoutSpacing } from 'components'
import { FeatureSection } from './Features'
import { meta } from 'shared/constants'

export function HomeTemplate() {
  return (
    <Layout>
      <Head meta={meta} />
      <Header />

      <FeatureSection />
      <LayoutSpacing size="small" />
    </Layout>
  )
}
