// import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

import style from './footer.module.scss'

import dataCollection, { dataCollectionB } from './dataCollection'
//import dataCollectionB from "./dataCollection";
import dataCollectionPages from './dataCollectionPages'

import Image from 'next/image'

const Footer = () => (
  <>
    <footer id="footer" className="ooter bg-base-200 p-5 flex flex-wrap justify-between z-0">
      <div className={style.wtf}>
        <Link href="/">
          <a className="link link-hover">
            <Image
              className="z-0"
              src="/assets/img/av-logo-footer.svg"
              alt=""
              width={300}
              height={100}
            />
          </a>
        </Link>
        <p className='font-bold'>Árvore da Vida Confecções LTDA.</p>
        <p>
          CNPJ:
          <a
            target="_blank"
            href="http://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp"
            rel="noreferrer"
          >
            07.865.795/0001-40
          </a>
        </p>
        <address>
          <p>Rua Aristóteles Ferreira 7 - Bonsucesso</p>
          <p>Rio de Janeiro RJ - CEP 21061-200</p>
        </address>
        <a href="tel:+5521999324792">+55 21 999 324 792</a>
        <a href="mailto:contatoarvoredavida@gmail.com">contatoarvoredavida@gmail.com</a>
      </div>
      <div className='products p-5'>
        <ul className="">
          {dataCollection.map((item) =>
            item.title ? (
              <li key={item.id}>
                <strong>{item.title}</strong>
              </li>
            ) : (
              <li key={item.id}>
                <a href={item.path}>{item.text}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className='services p-5'>
        <ul>
          {dataCollectionB.map((item) =>
            item.title ? (
              <li key={item.id}>
                <strong>{item.title}</strong>
              </li>
            ) : (
              <li key={item.id}>
                <a href={item.path}>{item.text}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className='pages p-5'>
        <ul>
          {dataCollectionPages.map((item) =>
            item.title ? (
              <li key={item.id}>
                <strong>{item.title}</strong>
              </li>
            ) : (
              <li key={item.id}>
                <a href={item.path}>{item.text}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  </>
)

export default Footer
