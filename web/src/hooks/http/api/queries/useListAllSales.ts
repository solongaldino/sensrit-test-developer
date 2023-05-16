import { useQuery, UseQueryResult } from "react-query";
import { SaleInterface } from "../../../../types";
import { APIGet } from "../../../../utils";

export type Response = SaleInterface[];

export default function useListAllSales(
  enabled = true
): UseQueryResult<Response, unknown> {
  return useQuery("sales-all", () => APIGet<Response>(`/sales/list-all`), {
    enabled,
  });
}
