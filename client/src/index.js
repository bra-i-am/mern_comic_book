import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_API;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
