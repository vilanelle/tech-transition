import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

/* Main container with background img for all pages */
const BackgroundContainer = styled('div')`
  background: url('${process.env.PUBLIC_URL}/img/background-img.png') center top / cover no-repeat;
  min-height: 100vh;
`;

const ContentContainer = styled(Container)`
  ${({ theme }) => css`
    padding: ${theme.spacing(2, 1)};

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(1, 0)};
    }
  `}
`;

export const MainContainer: React.FC<{}> = ({ children }) => (
  <BackgroundContainer>
    <ContentContainer maxWidth="md">
      { children! }
    </ContentContainer>
  </BackgroundContainer>
);
