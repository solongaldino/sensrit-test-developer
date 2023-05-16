import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Taxes, Products, Sales } from "../pages/backoffice";
import { Register, UrlNotFound } from "../pages/external";
import { BackofficeTemplate, ExternalTemplate } from "../shared/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={
            <ExternalTemplate>
              <Register />
            </ExternalTemplate>
          }
        />
        <Route
          path="/"
          element={
            <BackofficeTemplate isFirstActivation={false}>
              <Sales />
            </BackofficeTemplate>
          }
        />
        <Route
          path="/taxes"
          element={
            <BackofficeTemplate isFirstActivation={false}>
              <Taxes />
            </BackofficeTemplate>
          }
        />
        <Route
          path="/products"
          element={
            <BackofficeTemplate isFirstActivation={false}>
              <Products />
            </BackofficeTemplate>
          }
        />
        <Route
          path="/sales"
          element={
            <BackofficeTemplate isFirstActivation={false}>
              <Sales />
            </BackofficeTemplate>
          }
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
