import {
  AlertDialogsContext,
  IAlertDialogsContext,
} from "../contexts/AlertDialogs";
import { useContext } from "react";

export default function useAlertDialogs(): IAlertDialogsContext {
  return useContext(AlertDialogsContext);
}
