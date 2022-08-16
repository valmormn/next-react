// import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Card from '$components/Card'

type Props = {
  items?: any
  max?: number
  size?: string
  section?: string
}

const Explorer = ({ items, size, max }: Props) => {
  //let data = [...items.data]
  if (max && max < items.data.length) {
    items.data = items.data.slice(0, max)
    console.log(items)
    //data = data.slice(0, 3)
    //items.data = data
  }
  return (
    <>
      {/* <h1>Explorer</h1> */}
      {/* <div>{args.filter && <h2>Filter Data by Categories</h2>}</div> */}
      <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-content-center place-items-center m-8">
        {items.data.map((item: any, index: number) => (
          <Card data={item} size={size} key={index} />
        ))}
      </section>
    </>
  )
}

export default Explorer
