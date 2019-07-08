import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    font-family: sans-serif inherit;
    box-sizing: border-box;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
