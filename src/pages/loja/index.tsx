// import type { NextPage } from 'next'
import Head from 'next/head'
import Explorer from '$components/Explorer'
//import Image from 'next/image'

export async function getStaticProps() {
  // get products from our api
  const cmsQuery = `${process.env.CMS_HOST}/api/products?populate[Images][populate]=image=*&randomSort=true`

  const res = await fetch(cmsQuery)
  const items = await res.json()

  return {
    props: { items }
  }
}

const Loja = ({ items }: any) => {
  return (
    <>
      <Head>
        <title>Loja</title>
      </Head>
      <h1>Loja</h1>
      <Explorer items={items} section="shop" />
    </>
  )
}

export default Loja
