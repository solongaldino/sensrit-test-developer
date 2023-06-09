import { useQuery, UseQueryResult } from "react-query";
import { ProductInterface } from "../../../../types";
import { APIGet } from "../../../../utils";
import useAuth from "../../../useAuth";

export type Response = ProductInterface[];

export default function useListAllProducts(
  enabled = true
): UseQueryResult<Response, unknown> {
  const { user } = useAuth();
  return useQuery(
    "products-all",
    () => APIGet<Response>(`/products/list-all`, user?.accessToken),
    {
      enabled,
    }
  );
}
