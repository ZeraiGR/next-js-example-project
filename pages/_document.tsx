import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class OwlDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="ru">
        <Head />
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default OwlDocument;
