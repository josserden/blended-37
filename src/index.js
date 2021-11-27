import React from "react";
import ReactDOM from "react-dom";

import "modern-normalize/modern-normalize.css";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./index.styled";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
