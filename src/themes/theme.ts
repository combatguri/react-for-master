import { ModeTheme, DefaultTheme, ColorTheme } from "styled-components";

// export const darkTheme: ModeTheme = {
//   textColor: "#e0e0e0",
//   bgColor: "#4a4a4a",
// };

// export const lightTheme: ModeTheme = {
//   textColor: "#4a4a4a",
//   bgColor: "#e0e0e0",
// };

// export const defaultTheme: ModeTheme = {
//   textColor: "#4a4a4a",
//   bgColor: "#e0e0e0",
// };

export const colors: ColorTheme = {
  white: "#fff",
  gray100: "#f8f9fa",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#6c757d",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529",
  black: "#000",

  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#198754",
  teal: "#20c997",
  cyan: "#0dcaf0",
};

export const font = {
  100: "2.4rem",
  200: "2rem",
  300: "1.8rem",
  400: "1.6rem",
  500: "1.4rem",
  600: "1.2rem",
  700: "1rem",
  lighter: "lighter",
  light: 300,
  normal: 400,
  bold: 700,
  bolder: "bolder",
};

export const mode: ModeTheme = {
  textColor: colors.gray100,
  bgColor: colors.gray800,
};

export const theme = {
  mode: mode,
  colors: colors,
  font: font,
};
