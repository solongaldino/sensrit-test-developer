import { useMutation, UseMutationResult } from "react-query";
import { useAlertDialogs } from "../../..";
import { TaxeInterface } from "../../../../types";
import { APIPost } from "../../../../utils";
import useLoader from "../../../useLoader";

type Response = TaxeInterface;

interface Body {
  name: string;
  percentage: number;
}

interface Args {
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useCreateTaxe({
  onSuccess,
  onError,
}: Args): UseMutationResult<Response, unknown, Body> {
  const { showErrorDialog } = useAlertDialogs();
  const { showLoader, hideLoader } = useLoader();

  return useMutation((body) => APIPost<Response, Body>(`/taxes`, body), {
    onMutate: () => {
      showLoader();
    },
    onError: (error: Error) => {
      hideLoader();
      showErrorDialog({
        title: "Error ao criar imposto",
        description: error.message,
      });
      onError?.();
    },
    onSuccess: () => {
      hideLoader();
      onSuccess?.();
    },
  });
}
