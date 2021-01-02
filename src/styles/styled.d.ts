import 'styled-components';

interface ThemeInterface {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

declare module 'styled-components' {
  /* tslint:disable */
  export interface DefaultTheme extends ThemeInterface {}
}
