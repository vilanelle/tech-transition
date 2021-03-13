import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styled-components';

const DescriptionContainer = styled('div')`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(4, 'auto', 0)};
  *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
    width: 90%;
  }
`;

export const Description: React.FC<{}> = () => (
  <DescriptionContainer>
    <Typography>So you want to work in IT? Or you just curious about opportunities in the TECH world?</Typography>
    <Typography>You&apos;re in the right place!</Typography>
    <Typography>Explore the options below and decide which path works best for you.</Typography>
  </DescriptionContainer>
);
