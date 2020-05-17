import React from "react";
import ReactDom from "react-dom";
import "babel-polyfill";

import { App } from "./App";
import "./index.css";

ReactDom.render(<App />, document.getElementById("root"));
