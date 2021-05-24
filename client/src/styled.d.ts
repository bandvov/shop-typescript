import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background?: string;
    width?:string;
    minHeight?: string;
    darkOutShadow?: string;
    lightOutShadow?: string;
    darkInsetShadow?: string;
    lightInsetShadow?: string;
    borderRadius?:{
       primary?: string;
       secondary?: string;
    }
    error?: string;
    fontSize:{
        small?:string;
        normal?:string;
    }
    colors: {
        button:{
           background?:{
             primary?:  string;
             secondary?: string;
           }
           border?:{
               primary: string;
           } 
           color?:{
              primary: string;
           }         
        }
    };
  }
}