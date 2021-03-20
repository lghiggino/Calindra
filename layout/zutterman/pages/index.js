import Head from 'next/head'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default function Zutterman() {
    return (
      <div>
        <Head>
          <title>Zutterman - measuring tapes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
  