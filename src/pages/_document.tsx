import type { DocumentContext } from 'next/document'
import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        return Document.getInitialProps(context)
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.gstatic.com"
                        rel="preconnect"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        rel="stylesheet"
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

export default MyDocument
