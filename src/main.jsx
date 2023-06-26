import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { StateContext } from "./context/stateContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="889079172962-nbe5vlib8pr5uemsi0jh7t5l6qnscnjd.apps.googleusercontent.com">
    <StateContext>
      <App />
      <Analytics />
    </StateContext>
  </GoogleOAuthProvider>
);
