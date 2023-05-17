import { useAuth } from "../hooks";
import { BackofficeTemplate } from "../shared/layout";
import { Navigate } from "react-router-dom";

interface IPrivateRouteDTO {
  element: JSX.Element;
}

export default function PrivateRoute({ element }: IPrivateRouteDTO) {
  const { user } = useAuth();

  return user ? (
    <BackofficeTemplate isFirstActivation={false}>{element}</BackofficeTemplate>
  ) : (
    <Navigate to="/login" />
  );
}
