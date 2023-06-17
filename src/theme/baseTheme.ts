import { ThemeOptions } from '@mui/material';

// Agregar nuevas variantes para la paleta de colores
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: {
      lightBlue: string;
      pictonBlue: string;
      blueJeans: string;
      babyBlue: string;
      vividCeru: string;
      violetBlue: string;
    };
  }
  interface PaletteOptions {
    custom: {
      lightBlue: string;
      pictonBlue: string;
      blueJeans: string;
      babyBlue: string;
      vividCeru: string;
      violetBlue: string;
    };
  }
}
const BaseTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Inter', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '4.313rem' // 69px
    },
    h2: {
      fontSize: '3.438rem' // 55px
    },
    h3: {
      fontSize: '2.75rem' // 44px
    },
    h4: {
      fontSize: '2.25rem' // 36px
    },
    h5: {
      fontSize: '1.75rem' // 28px
    },
    h6: {
      fontSize: '1.125rem' // 18px
    },
    body1: {
      fontSize: '1.125rem' // 18px
    },
    body2: {
      fontSize: '1rem' // 14px
    },
    button: {
      fontFamily: 'Inter',
      textTransform: 'none',
      fontSize: '0.875rem'
    },
    caption: {
      fontSize: '0.75rem' // 12px
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  },
  zIndex: {
    drawer: 1000
  },
  components: {
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  }
};

export default BaseTheme;
