import type { DocumentContext } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { siteDescription, siteTitle } from '@constants';

import { ServerStyleSheet } from 'styled-components';

let siteUrl = '';
if (typeof window !== 'undefined') {
  siteUrl = window.location.host;
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="title" content={siteTitle} />
          <meta name="description" content={siteDescription} />
          <meta
            name="keywords"
            content="marketing digital , agências , chatbot , geração de leads , mídia digital"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteTitle} key="ogsitename" />
          <meta
            property="og:url"
            // content={process.env.NEXT_PUBLIC_LP_URL}
            content={siteUrl}
            key="ogurl"
          />

          <meta
            property="og:image"
            content={`${siteUrl}/static/images/thumbnail.png`}
            key="ogimage"
          />
          <meta property="og:image:width" content="1038" />
          <meta property="og:image:height" content="768" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content={siteTitle} />
          <meta property="twitter:url" content={siteUrl} />
          <meta
            name="twitter:image"
            content={`${siteUrl}/static/images/thumbnail.png`}
          />

          <link rel="icon" href="favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
