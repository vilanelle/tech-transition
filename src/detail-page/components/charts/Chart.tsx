import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { ChartSource } from '../../../data/charts/chartInterfaces';
import { ProfessionId } from '../../../data/home-page/ITProfessions';

interface ChartInterface {
  maxWidth: number;
  title: string;
  source: ChartSource | null;
  type: ProfessionId;
}

const StyledWrapper = styled('div')`
  height: auto;
  width: 100%;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}px`};
`;

const StyledSource = styled('p')`
  font-size: 0.8rem;
  margin-top: ${({ theme }) => `${theme.spacing(3)}px`};
  text-align: right;
`;

export const Chart: FC<ChartInterface> = ({ children, maxWidth, title, source, type }) => {
  const chartId = `chart-${type}`;
  return (
    <StyledWrapper>
      <StyledTitle variant="subtitle2" align="center" id={chartId}>
        {title}
      </StyledTitle>
      <div style={{ maxWidth }} aria-roledescription="img" aria-labelledby={chartId}>
        {children}
      </div>
      {source && (
        <StyledSource>
          Source: <a href={source.link}>{source.description}</a>
        </StyledSource>
      )}
    </StyledWrapper>
  );
};
