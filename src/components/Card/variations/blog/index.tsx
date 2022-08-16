// import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { blurDataURL } from './blurData'

// , ...props

const BlogVar = ({ data, args }) => {
  console.log('Card')
  console.log(args.type)
  const card = data
  return (
    <div className="card bordered" key={card.id} style={{ width: '256px' }}>
      <Image
        src={
          'http://192.168.0.123:1337' +
          card.attributes.CoverPic.data.attributes.url
        }
        placeholder="blur"
        blurDataURL={blurDataURL}
        width={256}
        height={256}
        alt={card.attributes.Title}
      />
      <div className="card-body p-2">
        <p className="card-title text-base">{card.attributes.Title}</p>
        {/* <div className="badge mx-2 badge-secondary">NEW</div> */}

        {/* <p>{card.attributes.Content}</p> */}
        <div className="justify-end card-actions">
          <Link href={`/shop/item/${card.attributes.slug}`} key={card.id}>
            <a>
              {/* <h2>{card.attributes.Title}</h2> */}
              {/* <div>{card.User.username}</div> */}
              <button className="btn btn-secondary">Read</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogVar

// key={card.id}
