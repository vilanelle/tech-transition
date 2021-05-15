import React, { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { devOps } from '../../../data/charts';
import { chartColors } from '../../../data/charts/chartColors';
import { ChartWrapper } from './ChartWrapper';
import { notEmpty } from '../../../shared/utils/helpers';

const { data: sourceData, labelText, source, title: chartTitle, type } = devOps;

const chartLabels = sourceData.map(({ label }) => label);
const chartValues = sourceData.map(({ value }) => value);
const chartBackgroundColors = sourceData
  .map(({ color }) => color ? chartColors[color].light : null)
  .filter(notEmpty);
const chartBorderColors = sourceData
  .map(({ color }) => color ? chartColors[color].dark : null)
  .filter(notEmpty);

const areColorsDefined = !sourceData.some(({ color }) => color === null);

const ChartData: Chart.ChartData = {
  labels: chartLabels,
  datasets: [
    {
      data: chartValues,
      borderWidth: 1,
      ...(labelText && {
        label: labelText,
      }),
      ...(areColorsDefined && {
        backgroundColor: chartBackgroundColors,
        borderColor: chartBorderColors,
      }),
    },
  ],
};

const ChartOptions: Chart.ChartOptions = {
  legend: {
    display: true,
  },
  responsive: true,
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

export const DevOpsChart: FC = () => (
  <ChartWrapper maxWidth={400} title={chartTitle} source={source} type={type}>
    <Pie
      data={ChartData}
      options={ChartOptions}
      aria-label={chartTitle}
      width={150}
      height={150}
      redraw
    />
  </ChartWrapper>
);
