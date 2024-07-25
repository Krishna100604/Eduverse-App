import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_Auth0_DOMAIN;
const clientId = import.meta.env.VITE_Auth0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
    ,
  </Auth0Provider>
);
