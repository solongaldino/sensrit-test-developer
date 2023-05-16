import { useMutation, UseMutationResult } from "react-query";
import { useAlertDialogs } from "../../..";
import { ProductTypeInterface } from "../../../../types";
import { APIPost } from "../../../../utils";
import useLoader from "../../../useLoader";

type Response = ProductTypeInterface;

interface Body {
  name: string;
  taxeId: number;
}

interface Args {
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useCreateProductType({
  onSuccess,
  onError,
}: Args): UseMutationResult<Response, unknown, Body> {
  const { showErrorDialog } = useAlertDialogs();
  const { showLoader, hideLoader } = useLoader();

  return useMutation(
    (body) => APIPost<Response, Body>(`/products-type`, body),
    {
      onMutate: () => {
        showLoader();
      },
      onError: (error: Error) => {
        hideLoader();
        showErrorDialog({
          title: "Error ao criar tipo de produto",
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
