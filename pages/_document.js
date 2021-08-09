import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx);

        return initalProps;
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/Main Logo.svg" />
                    <meta name="theme-color" content="#F53A3A" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
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

export default MyDocument;
