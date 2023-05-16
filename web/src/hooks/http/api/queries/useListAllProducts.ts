import { useQuery, UseQueryResult } from "react-query";
import { ProductInterface } from "../../../../types";
import { APIGet } from "../../../../utils";

export type Response = ProductInterface[];

export default function useListAllProducts(
  enabled = true
): UseQueryResult<Response, unknown> {
  return useQuery(
    "products-all",
    () => APIGet<Response>(`/products/list-all`),
    {
      enabled,
    }
  );
}
