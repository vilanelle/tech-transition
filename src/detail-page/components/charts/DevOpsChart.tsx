import React, { VFC } from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { devOps } from '../../../data/detail-page/charts';
import { chartColors } from '../../../data/detail-page/charts/chartColors';

const { data: sourceData, labelText, source, title: chartTitle } = devOps;

const ChartData = {
  labels: sourceData?.map(({ label }) => label),
  datasets: [
    {
      label: labelText,
      data: sourceData?.map(({ value }) => value),
      backgroundColor: sourceData?.map(({ color }) => chartColors[color].light),
      borderColor: sourceData?.map(({ color }) => chartColors[color].dark),
      borderWidth: 1,
    },
  ],
};

const ChartOptions = {
  responsive: true,
  title: {
    display: true,
    text: chartTitle,
  },
  legend: {
    display: true,
  },
};

const StyledWrapper = styled('div')`
  max-width: 400px;
`;

export const DevOpsChart: VFC = () => (
  <StyledWrapper>
    <Pie data={ChartData} options={ChartOptions} />
  </StyledWrapper>
);
