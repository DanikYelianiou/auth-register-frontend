import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
            rel="stylesheet"
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
