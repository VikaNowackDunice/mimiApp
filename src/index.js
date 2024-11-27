import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Импорт вашего файла CSS
import MyAppComponent from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MyAppComponent />
  </React.StrictMode>
);
