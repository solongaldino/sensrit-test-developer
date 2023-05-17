import { useMutation, UseMutationResult } from "react-query";
import { useAlertDialogs, useAuth } from "../../..";
import { CustomerInterface } from "../../../../types";
import { APIPost } from "../../../../utils";
import useLoader from "../../../useLoader";

type Response = CustomerInterface;

interface Body {
  name: string;
  email: string;
}

interface Args {
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useCreateCustomer({
  onSuccess,
  onError,
}: Args): UseMutationResult<Response, unknown, Body> {
  const { showErrorDialog } = useAlertDialogs();
  const { showLoader, hideLoader } = useLoader();

  const { user } = useAuth();
  return useMutation(
    (body) => APIPost<Response, Body>(`/customers`, body, user?.accessToken),
    {
      onMutate: () => {
        showLoader();
      },
      onError: (error: Error) => {
        hideLoader();
        showErrorDialog({
          title: "Error ao criar cliente",
          description: error.message,
        });
        onError?.();
      },
      onSuccess: () => {
        hideLoader();
        onSuccess?.();
      },
    }
  );
}
