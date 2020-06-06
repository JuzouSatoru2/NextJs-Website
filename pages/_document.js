import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/static/vendors/bootstrap/css/bootstrap.min.css" />
          <script src="/static/vendors/jquery/jquery.min.js"></script>
          <script async src="/static/vendors/popper/popper.min.js"></script>
          <script async src="/static/vendors/bootstrap/js/bootstrap.min.js"></script>
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