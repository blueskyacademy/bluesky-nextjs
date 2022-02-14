import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/hsc1kgw.css"
          as="font"
        />
        {/* <link
          rel="preload"
          href="/fonts/MYRIADPRO-REGULAR.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MYRIADPRO-BOLD.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
