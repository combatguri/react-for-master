import { css, createGlobalStyle } from "styled-components";

/*
TODO: 추후 꼭 인터페이스<제네릭> 적용해서 완료해 볼것
const makeRootVarFromTheme = <T>(theme: T, prefix: string) => {
  let templateLiteral = "";
  Object.keys(theme).forEach((k) => {
    templateLiteral += `--${prefix}-${k}:${theme[k]};`;
  });
  return `
    :root {
      ${templateLiteral}
    }
  `;
};
*/

// prettier-ignore
export const reset = css`

  // set Root variable from Color Theme
  ${({ theme:{colors} }) => {
    let templateLiteral = '';
    Object.keys(colors).forEach((k) => {
      templateLiteral += `--color-${k}:${colors[k]};`;
    });
    return `
      :root {
        ${templateLiteral}
      }
    `;
  }}

  // set Root variable from font Theme
  ${({ theme:{font} }) => {
    let templateLiteral = '';
    Object.keys(font).forEach((k) => {
      templateLiteral += `--font-${k}:${font[k]};`;
    });
    return `
      :root {
        ${templateLiteral}
      }
    `;
  }}


  /* http://meyerweb.com/eric/tools/css/reset/
    v5.0.1 | 20191019
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /* size: 100%; */
    /* font: inherit; */
    vertical-align: baseline;
    /* font-optical-sizing: auto; */
    /* font-style: normal; */
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  * {
    box-sizing: border-box;
    &[hidden] {
      display: none;
    }
  }
  body {
    color: ${(props) => props.theme.mode.textColor};
    background-color: ${(props) => props.theme.mode.bgColor};
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color:inherit;
    text-decoration:none;
  }
`;

export const Reset = createGlobalStyle`${reset}`;

export default reset;
