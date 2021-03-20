import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import Layout from '../components/Layout'
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default function Zutterman() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Zutterman - measuring tapes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Layout></Layout> */}
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
  