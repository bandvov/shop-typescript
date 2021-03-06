import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background?:Pick<'primary'| 'secondary'|'transparent' | string>;  
    width?: string;
    minHeight?: string;
    inputHeight?: string;
    darkOutShadow?: string;
    lightOutShadow?: string;
    darkInsetShadow?: string;
    lightInsetShadow?: string;
    lightSmallOutShadow?: string;
    darkSmallOutShadow?: string;
    padding: {
      default?: string;
      primary?: string;
      secondary?: string;
    };
    borderRadius: {
      default?: string;
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
