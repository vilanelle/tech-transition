import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

/* Main container with background img for all pages */
const BackgroundContainer = styled('div')`
  background: url('${process.env.PUBLIC_URL}/img/background-img.png') center top / cover no-repeat;
  min-height: 100vh;
`;

const ContentContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  width: 90%;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }
`;

export const MainContainer: React.FC<{}> = ({ children }) => (
  <BackgroundContainer>
    <ContentContainer maxWidth="md">
      { children! }
    </ContentContainer>
  </BackgroundContainer>
);
