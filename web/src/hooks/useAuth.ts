import { useContext } from "react";
import { AuthContext, IAuthContext } from "../contexts/Auth";

export default function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
