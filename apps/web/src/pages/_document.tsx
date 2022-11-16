import Document, { Head, Html, Main, NextScript } from 'next/document'

import { getPublicPath } from 'shared/utils'
import { getCssText } from 'styles'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#121214" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link rel="icon" href={getPublicPath('/favicon.ico')} />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
