import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Zutterman() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Zutterman - measuring tapes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <nav>
                <div className="flex  ml-2">
                    <div className="dots is-hidden-desktop"> <i className="fas fa-ellipsis-v"></i></div>
                    <img className="logo" src="./images/logo-Z.webp"alt="zuterman logo"/>
                    <div className="text-container ml-4">
                        <div><h1 className="lower-case is-hidden-mobile">zutterman</h1></div>
                        <div><span className="is-hidden-mobile">Measure Tapes</span></div>
                    </div>
                </div>
                <div className="flex column mr-2">
                    <a className="is-hidden-mobile .mr-2" href="/models">models</a>
                    <a className="is-hidden-mobile .mr-2" href="/guarantee">guarantee</a>
                    <a className="is-hidden-mobile .mr-2" href="/about-us">about us</a>
                </div>
            </nav>
        </header>
        <main>
            <section className="gray-bg top">
                <div className="title">
                    <h2 className="text-bold-gray">Measuring everything</h2>
                </div>
                <div className="image">
                    <img src="./images/measure1.png" alt="measure tape" />
                </div>
            </section>
            <section className="blue-bg bottom">
                <div className="title">
                    <h2>We are Leader in Measure Tapes</h2>
                    <p>There are 5x the circumference of planet earth in metric tapes.</p>
                </div>
                {/* <div className="image">
                    <img src="./images/measure2.png" alt="measure tape2 " />
                </div> */}
            </section>
        </main>
        <footer className="gray-bg">
            <section className="social">
                <h4>Follow Us</h4>
                <a href="youtube.com/zuttermanTapes"> <i className="fab fa-youtube"></i> </a>
                <a href="facebook.com/zuttermanTapes"> <i className="fab fa-facebook-f"></i> </a>
                <a href="twitter.com/zuttermanTapes"> <i className="fab fa-twitter"></i></a>
            </section>
            <section className="address">
                <h4>Contact</h4>
                <ul>
                    <li>2490 Leisure Lane</li>
                    <li>San Luis Obispo</li>
                    <li>California</li>
                </ul>
            </section>
        </footer>



        
  
        {/* <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
  
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>
  
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
  
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
  
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
  
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main> */}
  
        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer> */}
      </div>
    )
  }
  