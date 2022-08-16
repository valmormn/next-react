import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" data-theme="mytheme">
      <Head>
        <meta name='application-name' content='Árvore da Vida' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
