import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const breakpoints = createBreakpoints({});

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
    h1: {
      fontSize: 40,
      [breakpoints.down('sm')]: {
        fontSize: 30,
      },
      [breakpoints.down('xs')]: {
        fontSize: 24,
      },
    },
    body1: {
      [breakpoints.down('sm')]: {
        fontSize: 14,
      },
      [breakpoints.down('xs')]: {
        fontSize: 13,
      },
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: '#222222',
    },
  },
});
