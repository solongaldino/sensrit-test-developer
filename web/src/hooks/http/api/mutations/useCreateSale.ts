import { useMutation, UseMutationResult } from "react-query";
import { useAlertDialogs } from "../../..";
import { SaleInterface } from "../../../../types";
import { APIPost } from "../../../../utils";
import useLoader from "../../../useLoader";

type Response = SaleInterface;

interface Body {
  list: { productId: number; amount: number }[];
}

interface Args {
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useCreateSale({
  onSuccess,
  onError,
}: Args): UseMutationResult<Response, unknown, Body> {
  const { showErrorDialog } = useAlertDialogs();
  const { showLoader, hideLoader } = useLoader();

  return useMutation((body) => APIPost<Response, Body>(`/sales`, body), {
    onMutate: () => {
      showLoader();
    },
    onError: (error: Error) => {
      hideLoader();
      showErrorDialog({
        title: "Erro ao criar venda",
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
