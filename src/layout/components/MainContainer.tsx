import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled('div')`
    background-image: url('./img/background-img.png');
    background-size: cover; 
    background-position: center top;
    background-repeat: no-repeat;
    min-height: 100vh;
`;

export const MainContainer: React.FC<{}> = () => (
  <BackgroundContainer />
);
