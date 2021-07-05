import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  basicWidth: '1280px',
  containerWidth: '720px',
  color: {
    primary: '#632beb',
    black: '#000',
    basicTextColor: '#333',
    white: '#fff',
    red: '#ec455f',
    yellow: '#febd56',
    greishBrown: '#424242',
    blue: '#4593ec',
    gray: '#9e9e9e',
    lightGray: '#e0e0e0',
    whiteGray: '#f5f5f5',
    darkGray: '#616161',
  },
  bold: {
    light: 300,
    regular: 400,
    bold: 600,
  },
};

const mobileTheme: DefaultTheme = {
  basicWidth: '420px',
  containerWidth: '80%',
  color: {
    primary: '#632beb',
    black: '#000',
    basicTextColor: '#333',
    white: '#fff',
    red: '#ec455f',
    yellow: '#febd56',
    greishBrown: '#424242',
    blue: '#4593ec',
    gray: '#9e9e9e',
    lightGray: '#e0e0e0',
    whiteGray: '#f5f5f5',
    darkGray: '#616161',
  },
  bold: {
    light: 300,
    regular: 400,
    bold: 600,
  },
};

export { theme, mobileTheme };
