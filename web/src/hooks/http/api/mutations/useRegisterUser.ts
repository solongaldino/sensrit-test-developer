import { useMutation, UseMutationResult } from "react-query";
import { useAlertDialogs } from "../../..";
import { APIPost } from "../../../../utils";
import useLoader from "../../../useLoader";

type Response = unknown;

interface Body {
  name: string;
  email: string;
  password: string;
}

interface Args {
  onSuccess?: () => void;
}

export default function useRegisterUser({
  onSuccess,
}: Args): UseMutationResult<Response, unknown, Body> {
  const { showErrorDialog } = useAlertDialogs();
  const { hideLoader } = useLoader();

  return useMutation((body) => APIPost<Response, Body>(`/users`, body), {
    onError: (error: Error) => {
      hideLoader();
      showErrorDialog({
        title: "Error: Account creation failed",
        description: error.message,
      });
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });
}
