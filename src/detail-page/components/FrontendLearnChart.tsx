import React from 'react';
import { Bar } from 'react-chartjs-2';

const FrontendLearnChartData = {
  labels: [
    'React',
    'Vue',
    'Svelte',
    'Angular',
    'Preact',
    'Ember',
    'Backbone',
    'Other',
  ],
  datasets: [
    {
      data: [75, 50, 42, 30, 21, 15, 5, 10],
      backgroundColor: '#725ec0',
      barThickness: 30,
    },
  ],
};
const ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6,
          suggestedMax: 100,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  title: {
    display: true,
    text: 'Most popular JS frameworks in 2020',
  },
  legend: {
    display: false,
    fontFamily: 'Segoe UI',
  },
};
export const FrontendLearnChart: React.FC<{}> = () => (
  <div style={{ height: '200px', width: '400px' }}>
    <Bar
      data={FrontendLearnChartData}
      width={100}
      height={300}
      options={ChartOptions}
    />
  </div>
);
