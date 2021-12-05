import { css } from "@emotion/react";

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    background: #cc95c0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #7aa1d2,
      #dbd4b4,
      #cc95c0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #7aa1d2,
      #dbd4b4,
      #cc95c0
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    font-family: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    line-height: 0;
  }
`;
