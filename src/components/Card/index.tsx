// import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { blurDataURL } from './blurData'

// import BlogVar from './variations/blog/index'
// import ShopVar from './variations/shop/index'

type Props = {
  data?: any
  size?: string
}

const Card = ({ data, size }: Props) => {
  console.log('Card')

  return (
    <article className="card max-w-xs bg-base-100 shadow-xl m-2">
      <Link href={`/loja/item/${data.attributes.unique}`}>
        <a>
          <figure>
            {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
            <Image
              src={
                'http://localhost:1337' +
                data.attributes.Images.data[0].attributes.formats.small.url
              }
              alt={data.attributes.Images.data[0].attributes.alternativeText}
              // layout='fill'
              width={
                data.attributes.Images.data[0].attributes.formats.small.height
              }
              height={
                data.attributes.Images.data[0].attributes.formats.small.width
              }
              loading="lazy"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </figure>
        </a>
      </Link>
      <div className="card-body p-4">
        <p className="card-title text-sm">{data.attributes.Title}</p>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
          <p className="text-2xl">R$ {data.attributes.Price.toFixed(2)}</p>
        </div>
      </div>
    </article>
  )
}

export default Card

// return <ShopVar data={data} args={{ type: args.type }} />
