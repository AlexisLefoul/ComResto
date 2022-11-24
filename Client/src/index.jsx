import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.css";

import { AuthProvider } from "./helpers/setAuthToken";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
