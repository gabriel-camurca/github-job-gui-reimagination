import Document, { Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                {/* <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap" rel="stylesheet"/> */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}