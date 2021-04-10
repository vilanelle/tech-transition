import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';
import { MainContainer } from './MainContainer';

const CardWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  min-height: 70vh;
`;

export const NoMatch404: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <CardWrapper>
        <Typography variant="h4">404</Typography>
        <Box m={2}>
          <Typography variant="subtitle1">It looks like you&apos;re lost.</Typography>
        </Box>
        <Button variant="contained" color="secondary" onClick={() => history.push('/')}>Go to the homepage</Button>
      </CardWrapper>
    </MainContainer>
  );
};
