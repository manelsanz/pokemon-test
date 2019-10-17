import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

// import { createStore } from "redux";
// const store = createStore();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
