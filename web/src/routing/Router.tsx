import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customers, Products, Sales } from "../pages/backoffice";
import { Login, Logout, Register, UrlNotFound } from "../pages/external";
import { ExternalTemplate } from "../shared/layout";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Sales />} />} />
        <Route
          path="/login"
          element={
            <ExternalTemplate>
              <Login />
            </ExternalTemplate>
          }
        />
        <Route
          path="/logout"
          element={
            <ExternalTemplate>
              <Logout />
            </ExternalTemplate>
          }
        />
        <Route
          path="/register"
          element={
            <ExternalTemplate>
              <Register />
            </ExternalTemplate>
          }
        />
        <Route
          path="/backoffice"
          element={<PrivateRoute element={<Sales />} />}
        />
        <Route
          path="/backoffice/sales"
          element={<PrivateRoute element={<Sales />} />}
        />
        <Route
          path="/backoffice/customers"
          element={<PrivateRoute element={<Customers />} />}
        />
        <Route
          path="/backoffice/products"
          element={<PrivateRoute element={<Products />} />}
        />
        <Route
          path="*"
          element={
            <ExternalTemplate>
              <UrlNotFound url={window.location.pathname} />
            </ExternalTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
