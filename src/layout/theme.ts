import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    professions: {
      frontend: {
        main: React.CSSProperties['color'];
      };
      backend: {
        main: React.CSSProperties['color'];
      };
      uxui: {
        main: React.CSSProperties['color'];
      };
      qa: {
        main: React.CSSProperties['color'];
      };
      devops: {
        main: React.CSSProperties['color'];
      };
      projectmanager: {
        main: React.CSSProperties['color'];
      };
    };
  }
}

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
    subtitle1: {
      fontSize: 30,
    },
    h4: {
      fontSize: 160,
    },
  },
  palette: {
    primary: {
      main: '#725ec0',
    },
    secondary: {
      main: '#d99cff',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#222222',
      disabled: '#22222233',
      // Text color with opacity 30%
    },
    // we could add more colors later (lighter or darker)
    professions: {
      frontend: {
        main: '#bee5e4',
      },
      backend: {
        main: '#ff85be',
      },
      uxui: {
        main: '#7ec2ff',
      },
      qa: {
        main: '#fdf580',
      },
      devops: {
        main: '#d99cff',
      },
      projectmanager: {
        main: '#aafa87',
      },
    },
  },
});
