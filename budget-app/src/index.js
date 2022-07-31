import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import { AppProvider } from "./context";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
