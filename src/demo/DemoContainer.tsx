import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled('div')`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border: 1px solid ${props => { return props.theme.palette.primary.main; }};
  box-shadow: 5px 3px 3px ${props => { return props.theme.palette.secondary.main; }};
`;

const StyledTypography = styled(Typography)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const DemoContainer: React.FC<{}> = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box m={3}>
        <StyledTypography variant="h5">Buttons</StyledTypography>
        <Box display="flex" width={500} justifyContent="space-between" mt={1}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
        </Box>
        <StyledTypography variant="h5">Styled Div</StyledTypography>
        <StyledDiv>I am a nicely styled div</StyledDiv>
      </Box>
    </div>
  );
};
