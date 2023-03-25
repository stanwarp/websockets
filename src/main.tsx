import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { wsclient } from "./client/ws";

createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
