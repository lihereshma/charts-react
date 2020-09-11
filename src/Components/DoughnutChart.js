import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {
  const data = {
    labels: ['Chrome', 'Firefox', 'Edge', 'Internet Explorer', 'Others'],
    datasets: [ 
      {
        data: [6, 4, 2, 1, 2],
        borderColor: '#fff',
        backgroundColor: ['#8fcfd1', '#df5e88', '#f6ab6c', '#f6efa6', '#a6ed8e']
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Doughnut Chart'
    }
  }
  return (
    <Doughnut data={ data } options={ options }/>
  )
}

export default DoughnutChart
