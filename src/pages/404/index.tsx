import type { NextPage } from 'next'
import Link from 'next/link'

// import file from './text.mdx'

import style from './404.module.scss'

const PageNotFound: NextPage = () => {
  return (
    <>
      <section className={style.error404} datatype="404">
        <h1></h1>
        <p className={style.wtf}>🤷</p>
        <p className={style.wtf}>💩</p>
        <Link href="/">
          <button className="btn btn-square btn-primary">
            Voltar para o Início
          </button>
        </Link>
      </section>
    </>
  )
}

export default PageNotFound
