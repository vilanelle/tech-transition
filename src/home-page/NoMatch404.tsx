import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { MainContainer } from '../layout/components/MainContainer';

const HeaderTypography = styled(Typography)`
  font-weight: bold;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  margin: auto;
  min-height: 80vh;
`;
export const NoMatch404: React.FC<{}> = () => {
  return (
    <MainContainer>
      <HeaderTypography>
        <Typography variant="h1">404</Typography>
        <Typography variant="subtitle1">Page not found</Typography>
      </HeaderTypography>
    </MainContainer>
  );
};
