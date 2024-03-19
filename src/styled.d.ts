import "styled-components";

// https://styled-components.com/docs/api#typescript
declare module "styled-components" {
  /*
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
  */

  export interface ModeTheme {
    textColor: string;
    bgColor: string;
  }

  export interface ColorTheme {
    white: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    black: string;

    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
  }
}

export interface DefaultTheme {
  mode: ModeTheme;
  colors: ColorTheme;
}
