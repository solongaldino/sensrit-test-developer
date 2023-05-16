import axios, { AxiosResponse } from "axios";

const endpoint = "http://localhost:9090";

export const APIGet = async <T extends unknown>(
  url: string,
  token?: string
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(`${endpoint}${url}`, {
    headers: {
      "Content-Type": "application/json",
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
        "Content-Type": "application/json",
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
    body
  );
  return response.data;
};

export const APIDelete = async <T>(url: string, token?: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios.delete(`${endpoint}${url}`, {
    headers: {
      "Content-Type": "application/json",
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
      "Content-Type": "application/json",
    },
  });
  return response;
};
