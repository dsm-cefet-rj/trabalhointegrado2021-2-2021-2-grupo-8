
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import store from "./storeConfig/store";


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById("root")

);
