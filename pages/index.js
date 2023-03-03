import Head from 'next/head'
import { Inter } from '@next/font/google'
import StockPredictor from '../components/stock-predictor'
import Footer from '../components/footer'

export default function Home() {
  const footerProps = {
    email: 'steve.fanega.ii@gmail.com',
    website: 'https://fanegawebsites.com',
    github: 'https://github.com/sgfanega'
  }
  return (
    <>
      <Head>
        <title>Stock Predictor</title>
        <meta name="description" content="Stock Predictions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-vh-100">
        <div className="container stockpredictor">
          <h1 className="display-3 text-center">Stock Predictor</h1>
          <StockPredictor></StockPredictor>
        </div>
        <Footer footerProps={footerProps}/>
      </main>
    </>
  )
}
