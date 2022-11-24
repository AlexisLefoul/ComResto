import React from "react";
import { Navigate, Routes, Route, BrowserRouter, Link } from "react-router-dom";

import logo from "./assets/logo.png";

//history
import { history } from "./helpers/history";

//pages
import CarteMenu from "./pages/CarteMenu";
import GestionStock from "./pages/GestionStock";
import Login from "./pages/Login";
import MenuAdmin from "./pages/MenuAdmin";

function hasJWT() {
  let flag = false;
  localStorage.getItem("user-info") ? (flag = true) : (flag = false);
  return flag;
}

function RoutesPages() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="menu" element={<MenuAdmin />} />
        <Route path="login" element={<Login />} />
        <Route path="cartemenu" element={<CarteMenu />} />
        <Route path="gestionstock" element={<GestionStock />} />
        <Route
          path="/"
          element={hasJWT() ? <MenuAdmin /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPages;
