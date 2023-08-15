import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { Provider } from "react-redux";
import { store, persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
    <ToastContainer position="top-right" autoClose={1000} theme="dark" />
  </Provider>
);
