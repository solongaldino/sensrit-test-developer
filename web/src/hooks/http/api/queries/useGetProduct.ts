import { useQuery, UseQueryResult } from "react-query";
import { ProductInterface } from "../../../../types";
import { APIGet } from "../../../../utils";

export type Response = ProductInterface;

export default function useGetProduct(
  productId: ProductInterface["id"],
  enabled = true
): UseQueryResult<Response, unknown> {
  return useQuery(
    ["products", productId],
    () => APIGet<Response>(`/product?id=${productId}`),
    {
      enabled,
    }
  );
}
