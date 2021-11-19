import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head lang="en">
          {/* <!-- Open Graph / Facebook --> */}
          <meta content="website" property="og:type" />
          <meta content="https://justkahdri.io/" property="og:url" />
          {/* TODO: Change for actual url */}
          <meta content="Joaquín Montes | Software Developer" property="og:title" />
          <meta
            content="Welcome to my portfolio! Here you will see some of my work and my experience as a developer.
            I'm focused on frontend dev using technologies such as NextJS and React."
            property="og:description"
          />
          <meta content="/images/studio.jpg" property="og:image" />

          {/* <!-- Twitter --> */}
          <meta content="summary_large_image" property="twitter:card" />
          {/* TODO: Change for actual url */}
          <meta content="https://justkahdri.io/" property="twitter:url" />
          <meta content="Joaquín Montes | Software Developer" property="twitter:title" />
          <meta
            content="Welcome to my portfolio! Here you will see some of my work and my experience as a developer.
            I'm focused on frontend dev using technologies such as NextJS and React."
            property="twitter:description"
          />
          <meta content="/images/studio.jpg" property="twitter:image" />

          <meta charSet="utf-8" />
          <link href="/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
          <link href="/android-icon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/manifest.json" rel="manifest" />
          <meta content="#002710" name="msapplication-TileColor" />
          <meta content="#002710" name="theme-color" />
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
