import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Portfolio personal - Ezequiel Antoine"
          ></meta>
          <meta
            property="og:title"
            content="Ezequiel Antoine - Portfolio"
          ></meta>
          <meta
            property="og:description"
            content="Portfolio personal - Ezequiel Antoine"
          ></meta>
          <meta property="og:image" content="/public/preview.png"></meta>
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="32x32"
          />
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
