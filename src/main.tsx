// src/main.tsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
