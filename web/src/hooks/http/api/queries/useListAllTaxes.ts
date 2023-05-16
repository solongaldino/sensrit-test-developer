import { useQuery, UseQueryResult } from "react-query";
import { TaxeInterface } from "../../../../types";
import { APIGet } from "../../../../utils";

export type Response = TaxeInterface[];

export default function useListAllTaxes(
  enabled = true
): UseQueryResult<Response, unknown> {
  return useQuery("taxes-all", () => APIGet<Response>(`/taxes/list-all`), {
    enabled,
  });
}
