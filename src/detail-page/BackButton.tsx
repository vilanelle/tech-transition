import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const BackButtonStyle = styled(Button)`
margin: ${props => props.theme.spacing(2)}px 0px;  
`;

export const BackButton: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <Typography variant="button" display="block" gutterBottom>
      <BackButtonStyle
        startIcon={<ArrowBackIosIcon />}
        onClick={() => history.push('/')}

      >
        Back
      </BackButtonStyle>
    </Typography>
  );
};
