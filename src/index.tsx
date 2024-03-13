import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";

import "./index.scss";

export interface Theme {
  textColor: string;
  bgColor: string;
}

const dartTheme: Theme = {
  textColor: "whitesmoke",
  bgColor: "#111",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={dartTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
