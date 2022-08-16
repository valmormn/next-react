import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Layout from "$components/Layout";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
