import { useQuery, UseQueryResult } from "react-query";
import { ProductTypeInterface } from "../../../../types";
import { APIGet } from "../../../../utils";

export type Response = ProductTypeInterface[];

export default function useListAllProductsType(
  enabled = true
): UseQueryResult<Response, unknown> {
  return useQuery(
    "products-type-all",
    () => APIGet<Response>(`/products-type/list-all`),
    {
      enabled,
    }
  );
}
