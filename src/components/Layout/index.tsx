//import React from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
import Header from '$components/Layout/Header'
import Main from '$components/Layout/Main'
import Footer from '$components/Layout/Footer'
// import Whatsapp from '$components/Whatsapp';

import styles from './layout.module.css'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
    {/* <Whatsapp /> */}
  </>
)

export default Layout
