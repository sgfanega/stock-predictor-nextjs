import { useState, useEffect } from 'react'
import StockPredictorChart from './stock-predictor-chart';

export default function StockPredictor() {
  const [data, setData] = useState(null) // use for Stock Data
  const [tickerSymbolArray, setTickerSymbolArray] = useState(null) // use for Ticker Symbols
  const [tickerSymbol, setTickerSymbol] = useState('MSFT') // use for a Ticker Symbol

  useEffect(() => {
    async function fetchStockDataFromAPI(url) {
      fetch(url)
        .then((response) => response.json())
        .then(data => {
          setData(data.data)
          setTickerSymbolArrayFromData(data.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    
    async function setTickerSymbolArrayFromData(data) {
      setTickerSymbolArray(data.map((stock) => { return stock.attributes.ticker_symbol }))
    }

    fetchStockDataFromAPI(`api/stockpredictions`)
  }, [])
  
  function getStockData(data, tickerSymbol) {
    let stockData = data.find(stock => stock.attributes.ticker_symbol === tickerSymbol)

    return stockData?.attributes
  }
  
  if (!data) { return <p className="text-center"> Loading ...</p>}

  return (
    <> 

      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="canvas">
          {data && <StockPredictorChart stockData={getStockData(data, tickerSymbol)}/>}
          </div>
          <div className="col-12 col-md-4 pt-5">
          { tickerSymbolArray &&
          <select className="form-select" value={tickerSymbol} onChange={(event) => setTickerSymbol(event.target.value)}>
          {
            tickerSymbolArray.map((stock) => <option key={stock} value={stock}>{stock}</option>)
          }
          </select>
          }
          </div>
        </div>
      </div>
    </>
  )
}