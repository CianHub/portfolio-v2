import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      orange: string;
      white: string;
      blue: string;
      purple: string;
      pink: string;
      green: string;
    };

    fonts: {
      monaco: string;
      roboto: string;
    };
  }
}
