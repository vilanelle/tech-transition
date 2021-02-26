import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

/* Main container with background img for all pages */
const BackgroundContainer = styled('div')`
  background: url('${process.env.PUBLIC_URL}/img/background-img.png') center top / cover no-repeat;
  min-height: 100vh;
`;

export const MainContainer: React.FC<{}> = ({ children }) => (
  <BackgroundContainer>
    <Container maxWidth="md">
      { children! }
    </Container>
  </BackgroundContainer>
);
