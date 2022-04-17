import React, { useContext } from "react";
import { Route } from "react-router";
import { Navigate, Routes } from "react-router-dom";
import { AuthContext } from "../context/index.js";
import { pablicRoutes, privateRoutes } from "./../router/index.js";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  console.log("isAuth", isAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  ) : (
    <Routes>
      {pablicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
};

export default AppRouter;
