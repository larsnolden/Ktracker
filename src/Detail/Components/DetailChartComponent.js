import React from 'react'

var LineChart = require("react-chartjs").Line;

let DetailChartComponent = ({ xLabels, yValues }) => {

  let chartData = {
    labels: xLabels,
    datasets: [{
      label: 'apples',
      data: yValues,
      fillColor: "rgba(151,187,205,0.2)",
      stroleColor: "rgba(151,187,205,0.2)"
    }]
  }

  let chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }

  return <LineChart data={chartData} options={chartOptions} width='100' height='50' />
}

export default DetailChartComponent;