import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const sumOfAllAmounts = dataPoints.reduce((prev, curr)=> prev + curr.value, 0) 

  const chartBars = dataPoints.map((dataPoint) => (
    <ChartBar
      value={dataPoint.value}
      maxValue={sumOfAllAmounts}
      label={dataPoint.label}
      kay={dataPoint.label}
    />
  ));
  return <div className="chart">{chartBars}</div>;
};

export default Chart;
