import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background?: string;
    width?: string;
    minHeight?: string;
    inputHeight?: string;
    darkOutShadow?: string;
    lightOutShadow?: string;
    darkInsetShadow?: string;
    lightInsetShadow?: string;
    padding: {
      primary?: string;
      secondary?: string;
    };
    borderRadius: {
      primary?: string;
      secondary?: string;
    };
    border: {
      primary: {
        default?: string;
        error?: string;
      };
      secondary: {
        default?: string;
        error?: string;
      };
    };
    error: string;
    fontSize: {
      small?: string;
      normal?: string;
    };
    button: {
      background?: {
        primary?: string;
        secondary?: string;
      };
      color?: {
        primary?: string;
      };
      height?: string;
    };
  }
}
