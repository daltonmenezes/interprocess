import NextHead from 'next/head'

import { meta } from 'shared/constants'

interface HeadProps {
  children?: React.ReactNode
  meta: typeof meta
}

export function Head({ meta, children }: HeadProps) {
  return (
    <NextHead>
      <title>{meta.title}</title>

      <meta name="image" content={meta.image.url} />
      <meta name="description" content={meta.description} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={meta.image.url} />
      <meta property="og:image:secure_url" content={meta.image.url} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={meta.image.width} />
      <meta property="og:image:height" content={meta.image.height} />

      <meta name="twitter:image" content={meta.image.url} />
      <meta name="twitter:image:src" content={meta.image.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitter.site} />
      <meta name="twitter:creator" content={meta.twitter.site} />
      <meta name="twitter:image:width" content={meta.image.width} />
      <meta name="twitter:image:height" content={meta.image.height} />

      {children}
    </NextHead>
  )
}
