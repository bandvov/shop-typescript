// my-theme.ts

import { DefaultTheme } from 'styled-components';
import {
  BASIC_BACKGROUND_COLOR,
  ERROR_MESSAGE_COLOR,
  DARK_OUT_SHADOW,
  LIGHT_OUT_SHADOW,
  DARK_INSET_SHADOW,
  lIGHT_INSET_SHADOW,
  DARK_SMALL_OUT_SHADOW,
  lIGHT_SMALL_OUT_SHADOW
} from '../configs/constants';

const defaultTheme: DefaultTheme = {
  background:{
   primary: BASIC_BACKGROUND_COLOR,
   secondary: 'black',
  }, 
  error: ERROR_MESSAGE_COLOR,
  darkOutShadow: DARK_OUT_SHADOW,
  lightOutShadow: LIGHT_OUT_SHADOW,
  darkInsetShadow: DARK_INSET_SHADOW,
  lightInsetShadow: lIGHT_INSET_SHADOW,
  darkSmallOutShadow: DARK_SMALL_OUT_SHADOW,
  lightSmallOutShadow: lIGHT_SMALL_OUT_SHADOW,

  width: '100%',
  minHeight: '100%',
  padding: {
    default: '0',
    primary: '0.5rem 1rem',
    secondary: '1rem',
  },
  borderRadius: {
    default: '0',
    primary: '5px',
    secondary: '15px',
  },
  border: {
    primary: {
      default: '1px solid blue',
      error: '1px solid red',
    },
    secondary: {
      default: '1px solid blue',
      error: '1px solid red',
    },
  },
  fontSize: {
    small: '8px',
    normal: '16px',
  },
  button: {
    background: {
      primary:
        'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,255,255,1) 0%, rgba(0,128,255,1) 100%);',
    },
    color: {
      primary: 'white',
    },
    height: '34px',
  },
};

export { defaultTheme };
