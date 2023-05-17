import axios, { AxiosResponse } from "axios";

const endpoint = process.env.REACT_APP_API_URL;

export const APIGet = async <T extends unknown>(
  url: string,
  token?: string
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(`${endpoint}${url}`, {
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
    },
  });
  return response.data;
};

export const APIPatch = async <T, R>(
  url: string,
  body: R,
  token?: string
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.patch(
    `${endpoint}${url}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
      },
    }
  );
  return response.data;
};

export const APIPost = async <T, R>(
  url: string,
  body: R,
  token?: string
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.post(
    `${endpoint}${url}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
      },
    }
  );
  return response.data;
};

export const APIDelete = async <T>(url: string, token?: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios.delete(`${endpoint}${url}`, {
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
    },
  });
  return response.data;
};

export const RawAPIGet = async <T extends unknown>(
  url: string,
  token?: string
): Promise<AxiosResponse<T>> => {
  const response: AxiosResponse<T> = await axios.get(`${endpoint}${url}`, {
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
    },
  });
  return response;
};
