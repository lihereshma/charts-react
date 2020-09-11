import React from 'react';
import './App.css';
import LineChart from './Components/LineChart';
import BarChart from './Components/BarChart';
import DoughnutChart from './Components/DoughnutChart';

function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
        <BarChart />
        <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
