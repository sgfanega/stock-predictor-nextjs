import { LineChart } from "./line-chart";

export default function StockPredictorChart(props) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: props?.stockData?.company_name + " Predictions"
      }
    }
  }
  const data = {
    datasets: [
      {
        label: props?.stockData?.ticker_symbol,
        data: props?.stockData?.predictions,
        borderColor: 'rgb(46, 204, 113)',
        backgroundColor: 'rgba(46, 204, 113, 0.5)'
      }
    ]
  }

  return (
    <LineChart options={options} data={data}/>
  )
}
