import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cherik</title>
        <meta name="description" content="Cherik Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Cherik Website
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mpch.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Cherik'}
        </a>
      </footer>
    </div>
  )
}
