import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [ 
      {
        label: 'Sales for 2020 (M)',
        data: [3, 2, 2, 1, 5],
        borderColor: '#b17179',
        backgroundColor: 'rgba(177, 113, 121, .6)',
        pointBackgroundColor: 'rgba(74, 48, 77, .5)',
        pointBorderColor: '#4a304d'
      },
      {
        label: 'Sales for 2019 (M)',
        data: [1, 3, 2, 2, 3],
        borderColor: '#0e2e3b',
        backgroundColor: 'rgba(14, 46, 59, .5)',
        pointBackgroundColor: 'rgba(22, 102, 120, .6)',
        pointBorderColor: '#166678'
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }
  return (
    <Line data={ data } options={ options }/>
  )
}

export default LineChart
