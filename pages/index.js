import { NextSeo } from 'next-seo';
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
      <NextSeo 
        title="Stock Predictor"
        description="A Simple Stock Predictor using Machine Learning SVM in Python"
        openGraph={{
          url: 'https://stock-predictor-fwd.netlify.app/',
          title: 'Stock Predictor',
          description: "A Simple Stock Predictor using Machine Learning SVM in Python",
          images: [
            {
              url: '/stock-prediction-og.webp',
              width: 1200,
              height: 630,
              alt: 'Stock Predictor',
              type: 'image/wepb'
            }
          ],
          siteName: 'Stock Predictor'
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico'
          }
        ]}
      />
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
