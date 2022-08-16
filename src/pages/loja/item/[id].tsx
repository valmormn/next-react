//import type { NextPage } from 'next'

import { GetStaticProps, GetStaticPaths } from 'next/types'
import Image from 'next/image'
import { useEffect } from 'react'
//import { useRouter } from 'next/router'
import Head from 'next/head'
import Explorer from '$components/Explorer'
import parse from 'html-react-parser'

const Cores = () => {
  const x = ['white', 'black', 'silver', 'green', 'red', 'blue', 'pink'].map(
    (value, index) => (
      <span
        key={index}
        className={`badge badge-lg m-1`}
        style={{ backgroundColor: value }}
      ></span>
    )
  )

  //console.log(x)
  return <div className="flex flex-row">{x}</div>
}

const Dimensoes = ({ thisItem }) => {
  console.log('Dimensoes')
  console.log(thisItem.data[0].attributes.Sizes)
  let dimensions = thisItem.data[0].attributes.Sizes
  //debugger

  return (
    <table className="table table-compact w-full max-w-md">
      <thead>
        <tr>
          <th></th>
          <th>Largura [ cm ]</th>
          <th>Altura [ cm ]</th>
        </tr>
      </thead>
      <tbody>
        {dimensions.map((value, index) => (
          <tr className="hover" key={index}>
            <th>{value.tamanho}</th>
            <td>{value.largura}</td>
            <td>{value.altura}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Tamanhos = ({ thisItem }) => {
  useEffect(() => {
    const modalControl = document.querySelector('.modal-control')
    const modalToggle = document.querySelector('.modal-activate')
    modalToggle.addEventListener('click', () => {
      if (modalControl.classList.contains('modal-open')) {
        // console.log()
        modalControl.classList.remove('modal-open')
      } else {
        modalControl.classList.add('modal-open')
      }
      console.log(modalControl.classList)
    })

    document.querySelector('.modal-close').addEventListener('click', (e) => {
      e.preventDefault()
      // e.stopImmediatePropagation()
      modalControl.classList.remove('modal-open')
    })
  }, [])

  const x = ['P', 'M', 'G', 'GG', 'XGG'].map((value, index) => (
    <div className={`tam-${index}`} key={index}>
      <label className="label mx-auto">
        <span className="label-text text-lg text-center">{value}</span>
      </label>
      <input
        type="number"
        placeholder=""
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  ))

  //console.log(x)
  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold">Tamanhos</p>
        <p
          htmlFor="my-modal"
          className="modal-button text-xl cursor-pointer modal-activate"
        >
          Dimensões
        </p>
      </div>
      <div className="flex flex-row">{x}</div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-control">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">Dimensões</h3>
          <Dimensoes thisItem={thisItem} />
          <p className="py-4">* Dimensões em centímetros.</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2  modal-close"
            >
              x
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `${process.env.CMS_HOST}/api/products`

  const res = await fetch(query)
  const items = await res.json()

  // É precso mapear o array de items para gerar os paths
  const pathx: Array<string> = items.data.map((value) => {
    return { params: { id: value.attributes.unique } }
  })

  return {
    paths: pathx,
    fallback: false // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const thisItemQuery = `${process.env.CMS_HOST}/api/products?populate[Images][populate]=image&filters[unique][$eq]=${id}`
  const listItemsQuery = `${process.env.CMS_HOST}/api/products?populate[Images][populate]=image=*&randomSort=true`

  const [resThisItem, resListItems] = await Promise.all([
    fetch(thisItemQuery),
    fetch(listItemsQuery)
  ])
  const [thisItem, listItems] = await Promise.all([
    resThisItem.json(),
    resListItems.json()
  ])

  return {
    props: { thisItem, listItems }
  }
}

const Item = ({ thisItem, listItems }) => {
  //const src = useSrc('')
  //const err = useErr(null)
  //const router = useRouter()
  console.log(thisItem)
  console.log(listItems)

  const item = thisItem
  const data = item.data[0].attributes

  // useEffect(() => {
  // },[])

  return (
    <>
      <Head>
        <title>{`AV ${item.data[0].attributes.Title}`}</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-x-20">
          <div className="mx-auto ">
            <picture>
              <Image
                src={
                  'http://192.168.0.123:1337' +
                  item.data[0].attributes.Images.data[0].attributes.formats
                    .medium.url
                }
                alt={
                  item.data[0].attributes.Images.data[0].attributes
                    .alternativeText.height
                }
                width={
                  item.data[0].attributes.Images.data[0].attributes.formats
                    .medium.height
                }
                height={
                  item.data[0].attributes.Images.data[0].attributes.formats
                    .medium.width
                }
                loading="lazy"
              ></Image>
            </picture>
          </div>
          <div className="w-full lg:py-6 mt-6 lg:mt-0 mx-auto">
            <h1>{item.data[0].attributes.Title}</h1>
            <div className="price-tag pb-6">
              <p className="text-2xl text-center">
                Preço Unitário:{' '}
                <span className="text-4xl">R$ {data.Price.toFixed(2)}</span>
              </p>
              <p className="text-xs text-center">
                {' '}
                Preço para até 20 unidades.
              </p>
              <p className="text-xs text-center">
                Verifique nossos descontos para compras no atacado.
              </p>
            </div>

            <div className="cores flex flex-row w-full flex-">
              <Cores />
            </div>

            <div>
              <Tamanhos thisItem={thisItem} />
            </div>

            <div className="flex flex-row justify-center">
              <button className="btn w-72 m-6">Comprar</button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl mt-3 font-bold">Descrição</p>
          {parse(data.Info)}

          <p className="text-xl mt-3 font-bold">Detalhes</p>
          {parse(data.Details)}

          <p className="text-xl mt-3 font-bold">Dimensões</p>
          <Dimensoes thisItem={thisItem} />
        </div>
      </div>

      <hr className="my-6"></hr>

      <h3 className="mt-6">Sugestão de produtos</h3>
      <Explorer items={listItems} max={6} size="small" section="shop" />
    </>
  )
}

export default Item
