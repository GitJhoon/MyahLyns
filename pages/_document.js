import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#120A0A" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: 0, background: "#120A0A" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
