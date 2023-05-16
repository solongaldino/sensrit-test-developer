import { useMutation, UseMutationResult } from "react-query";
import { useAlertDialogs } from "../../..";
import { ProductInterface } from "../../../../types";
import { APIPost } from "../../../../utils";
import useLoader from "../../../useLoader";

type Response = ProductInterface;

interface Body {
  productTypeId: number;
  name: string;
  value: number;
  description: string;
}

interface Args {
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useCreateProduct({
  onSuccess,
  onError,
}: Args): UseMutationResult<Response, unknown, Body> {
  const { showErrorDialog } = useAlertDialogs();
  const { showLoader, hideLoader } = useLoader();

  return useMutation((body) => APIPost<Response, Body>(`/products`, body), {
    onMutate: () => {
      showLoader();
    },
    onError: (error: Error) => {
      hideLoader();
      showErrorDialog({
        title: "Erro ao criar produto",
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
