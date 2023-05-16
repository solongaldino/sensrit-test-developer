import { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { APIGet } from "../../../../utils";

interface IParams {
  url: string;
  queryKey: string;
}

export default function useQueryTable<Response>({ url, queryKey }: IParams) {
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const user = { accessToken: undefined }; // Gambi pra funcionar

  let totalPages = 0;

  const [endpoint, query] = url.split("?");

  const params = new URLSearchParams({
    offset: (currentPage === 1 ? 0 : (currentPage - 1) * size).toString(),
    size: size.toString(),
  });

  query?.split("&").forEach((qs) => {
    const [key, value] = qs.split("=");
    params.append(key, value);
  });

  if (sortBy) {
    params.append("sortBy", sortBy);
    params.append("order", order);
  }

  const queryResult = useQuery(
    [queryKey, currentPage],
    () =>
      APIGet<Response>(`${endpoint}?${params.toString()}`, user?.accessToken),
    {
      enabled: true,
      staleTime: 5 * 60 * 1000, // 5min
    }
  ) as UseQueryResult<
    {
      count: number;
      list: Response;
    },
    unknown
  >;

  const { refetch, data, isSuccess, isIdle, isLoading, isError } = queryResult;

  if (isSuccess && data) {
    const division = data.count / size;
    if (division === 0) {
      totalPages = 0;
    } else if (division > 0 && division < 1) {
      totalPages = 1;
    } else {
      totalPages = Math.round(division);
    }
  }

  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [size, sortBy, order]);

  return {
    data: data?.list,
    isIdle,
    isSuccess,
    isLoading,
    isError,
    currentPage,
    totalPages,
    size,
    sortBy,
    order,
    setCurrentPage,
    setSize,
    setSortBy,
    setOrder,
    refetch,
  };
}
