import React, { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { devOps } from '../../../data/charts';
import { chartColors } from '../../../data/charts/chartColors';
import { Chart } from './Chart';

const { data: sourceData, labelText, source, title: chartTitle } = devOps;

const ChartData = {
  labels: sourceData.map(({ label }) => label),
  datasets: [
    {
      label: labelText,
      data: sourceData.map(({ value }) => value),
      backgroundColor: sourceData.map(({ color }) => (color ? chartColors[color].light : null)),
      borderColor: sourceData.map(({ color }) => (color ? chartColors[color].dark : null)),
      borderWidth: 1,
    },
  ],
};

const ChartOptions = {
  legend: {
    display: true,
  },
  responsive: true,
  maintainAspectRatio: true,
};

export const DevOpsChart: FC = () => (
  <Chart maxWidth={400} title={chartTitle} source={source}>
    <Pie
      data={ChartData}
      options={ChartOptions}
      aria-label={chartTitle}
      width={150}
      height={150}
      redraw
    />
  </Chart>
);
