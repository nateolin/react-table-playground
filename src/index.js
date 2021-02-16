import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
