import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import BaseTheme from './baseTheme';

const Theme = createTheme({
  ...BaseTheme,
  palette: {
    ...BaseTheme.palette,
    mode: 'light',
    primary: {
      main: '#0A135C',

      contrastText: '#fff',
      50: '#E8F3FF',
      100: '#D5E8FF',
      200: '#B3D3FF',
      300: '#85B4FF',
      400: '#5686FF',
      500: '#2F59FF',
      600: '#0C26FF',
      700: '#142290',
      800: '#061CCD',
      900: '#10249F'
    },
    secondary: {
      main: '#4CABE4',
      contrastText: '#fff',
      100: '#F4F3FF',
      200: '#F1EEFF',
      300: '#E1DCFE',
      400: '#D3CBFF',
      500: '#B4A7FD',
      600: '#8F7CFD'
    },
    success: {
      main: '#43C568',
      contrastText: '#fff'
    },
    error: {
      main: '#F44336',
      contrastText: '#fff'
    },
    info: {
      main: '#6277F2',
      contrastText: '#fff'
    },
    warning: {
      main: '#FBEB45',
      contrastText: '#fff'
    },
    background: {
      default: '#F5F5F5', // background body
      // default: '#FFFFF', // background body
      paper: '#FFFFFF'
    },
    grey: {
      100: '#FFFFFF',
      200: '#F2F3F7',
      300: '#E8EAF3',
      400: '#D8DBE4',
      500: '#C0C4D2',
      600: '#969AAC',
      700: '#727688',
      800: '#4D5163',
      900: '#373939'
    },
    custom: {
      lightBlue: '#E8F3FF',
      pictonBlue: '#4CABE4',
      blueJeans: '#5BB5E9',
      babyBlue: '#89C8F2',
      vividCeru: '#11ACED',
      violetBlue: '#324BAA'
    }
  },
  components: {
    ...BaseTheme.components
  }
});

const LightTheme = responsiveFontSizes(Theme);

export default LightTheme;
