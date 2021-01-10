import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

export const DemoContainer: React.FC<{}> = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Box m={3}>
      <Typography variant="h5">Buttons</Typography>
      <Box display="flex" width={400} justifyContent="space-between" mt={1}>
        <Button color="primary">Primary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Box>
    </Box>
  </div>
);
