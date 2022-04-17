import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Register from "./../pages/Register";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "*", element: <Navigate to="/about" /> },
];

export const pablicRoutes = [
  { path: "/register", element: <Register /> },
  { path: "*", element: <Navigate to="/register" /> },
];
