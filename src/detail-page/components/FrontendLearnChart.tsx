import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

interface ChartDataItem {
  label: string;
  value: number;
}

const data: ChartDataItem[] = [
  {
    label: 'React',
    value: 75,
  },
  {
    label: 'Vue',
    value: 50,
  },
  {
    label: 'Svelte',
    value: 42,
  },
  {
    label: 'Angular',
    value: 30,
  },
  {
    label: 'Preact',
    value: 21,
  },
  {
    label: 'Ember',
    value: 15,
  },
  {
    label: 'Backbone',
    value: 5,
  },
  {
    label: 'Other',
    value: 10,
  },
];

const frontendLearnChartData = {
  labels: data.map(item => item.label),
  datasets: [
    {
      data: data.map(item => item.value),
      backgroundColor: '#725ec0',
      barThickness: 30,
      label: '% of votes',
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
  },
};

const StyledParagraph = styled('p')`
  margin-top: 20px;
  font-size: 0.95rem;
  text-align: center;
`;

export const FrontendLearnChart: React.FC<{}> = () => (
  <div style={{ height: '300px', maxWidth: '400px' }}>
    <Bar
      data={frontendLearnChartData}
      width={100}
      height={300}
      options={ChartOptions}
    />
    <StyledParagraph>
      Source: <a href="https://stateofjs.com/">Source Of JS</a>
    </StyledParagraph>
  </div>
);
