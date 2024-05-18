import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import router from "./router/index";
// import App from "./App";

import "./index.scss";
import { theme } from "./themes/theme";

// 어떤것을 넣던 <header>안으로 들어감
import { HelmetProvider } from "react-helmet-async";

// react query
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();

/*
Change To theme.ts
*/
// export interface Theme {
//   textColor: string;
//   bgColor: string;
// }

// const dartTheme: Theme = {
//   textColor: "whitesmoke",
//   bgColor: "#b6b6b6",
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <Reset>
  <HelmetProvider>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  </HelmetProvider>
  // </Reset>
);
