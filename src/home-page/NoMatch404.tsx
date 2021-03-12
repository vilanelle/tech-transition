import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { MainContainer } from '../layout/components/MainContainer';

const NoMatchTypography = styled('div')`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  margin: auto;
  min-height: 70vh;
`;

const HeaderTypography = styled(Typography)`
  font-size:10em;
`;
const SubtitleTypography = styled(Typography)`
  font-size:2em;
  margin: ${props => props.theme.spacing(2)}px;  
`;

const StyledButton = styled(Button)`
color: white;
`;

export const NoMatch404: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <NoMatchTypography>
        <HeaderTypography variant="h4">404</HeaderTypography>
        <SubtitleTypography variant="subtitle1">It looks like you&apos;re lost.</SubtitleTypography>
        <StyledButton variant="contained" color="secondary" onClick={() => history.push('/')}>Go to the homepage</StyledButton>
      </NoMatchTypography>
    </MainContainer>
  );
};
