import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { StateContext } from "./context/stateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContext>
    <App />
  </StateContext>
);
