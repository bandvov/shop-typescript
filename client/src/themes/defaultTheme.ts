// my-theme.ts

import { DefaultTheme } from 'styled-components';
import {
  BASIC_BACKGROUND_COLOR,
  ERROR_MESSAGE_COLOR,
  DARK_OUT_SHADOW,
  LIGHT_OUT_SHADOW,
  DARK_INSET_SHADOW,
  lIGHT_INSET_SHADOW,
} from '../configs/constants';

const defaultTheme: DefaultTheme = {
  background: BASIC_BACKGROUND_COLOR,
  error: ERROR_MESSAGE_COLOR,
  darkOutShadow: DARK_OUT_SHADOW,
  lightOutShadow: LIGHT_OUT_SHADOW,
  darkInsetShadow: DARK_INSET_SHADOW,
  lightInsetShadow: lIGHT_INSET_SHADOW,
  width: '100vw',
  minHeight: '100vh',
  padding: {
    primary: '0.5rem 1rem',
    secondary: '1rem',
  },
  borderRadius: {
    primary: '5px',
    secondary: '15px',
  },
  border: {
    primary: {
      default: '0.5px solid blue',
      error: '0.5px solid red',
    },
    secondary: {
      default: '1px solid blue',
      error: '1px solid red',
    },
  },
  fontSize: {
    small: '8px',
    normal: '13px',
  },
  button: {
    background: {
      primary: 'linear-gradient(rgb(0,255,255,rgb(0,128,255)))',
    },
    color: {
      primary: 'white',
    },
  },
};

export { defaultTheme };
