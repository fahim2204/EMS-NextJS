import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="EMS - Everspecial Medical Support" />
        <meta name="description" content="Everspecial Medical Support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: light)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
