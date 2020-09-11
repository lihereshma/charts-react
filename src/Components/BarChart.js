import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [ 
      {
        label: 'Sales for 2020 (M)',
        data: [3, 2, 2, 1, 5],
        borderColor: '#b17179',
        backgroundColor: 'rgba(177, 113, 121, .6)',
      },
      {
        label: 'Sales for 2019 (M)',
        data: [1, 3, 2, 2, 3],
        borderColor: '#0e2e3b',
        backgroundColor: 'rgba(14, 46, 59, .5)',
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Bar Chart'
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
    <Bar data={ data } options={ options }/>
  )
}

export default BarChart
