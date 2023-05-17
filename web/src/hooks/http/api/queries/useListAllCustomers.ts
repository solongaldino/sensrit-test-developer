import { useQuery, UseQueryResult } from "react-query";
import { CustomerInterface } from "../../../../types";
import { APIGet } from "../../../../utils";
import useAuth from "../../../useAuth";

export type Response = CustomerInterface[];

export default function useListAllCustomers(
  enabled = true
): UseQueryResult<Response, unknown> {
  const { user } = useAuth();
  return useQuery(
    "customer-all",
    () => APIGet<Response>(`/customers/list-all`, user?.accessToken),
    {
      enabled,
    }
  );
}
