import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { frontend } from '../../../data/charts';
import { chartColors } from '../../../data/charts/chartColors';
import { ChartWrapper } from './ChartWrapper';

const { data: sourceData, labelText, source, title: chartTitle, type } = frontend;

const chartLabels = sourceData.map(({ label }) => label);
const chartValues = sourceData.map(({ value }) => value);
const chartBackgroundColors = sourceData.map(
  ({ color }) => chartColors[color].light,
);
const chartBorderColors = sourceData.map(
  ({ color }) => chartColors[color].dark,
);

const ChartData: Chart.ChartData = {
  labels: chartLabels,
  datasets: [
    {
      data: chartValues,
      borderWidth: 1,
      ...(labelText && {
        label: labelText,
      }),
      backgroundColor: chartBackgroundColors,
      borderColor: chartBorderColors,
    },
  ],
};

const ChartOptions: Chart.ChartOptions = {
  legend: {
    display: false,
  },
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
  maintainAspectRatio: true,
  tooltips: {
    callbacks: {
      label(tooltipItem, data) {
        const { datasets, labels } = data;
        const tooltipDatasetIndex = tooltipItem.datasetIndex!;
        const tooltipIndex = tooltipItem.index!;
        const tooltipLabel = datasets![tooltipDatasetIndex].label || '';
        const tooltipValue = datasets![tooltipDatasetIndex].data![tooltipIndex];
        const valueLabel = labels![tooltipIndex];
        return ` ${valueLabel}: ${tooltipValue}${tooltipLabel}`;
      },
    },
  },
};

export const FrontEndChart: FC = () => (
  <ChartWrapper maxWidth={400} title={chartTitle} source={source} type={type}>
    <Bar
      data={ChartData}
      options={ChartOptions}
      aria-label={chartTitle}
      width={400}
      height={200}
      redraw
    />
  </ChartWrapper>
);
