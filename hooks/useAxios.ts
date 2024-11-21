import * as SecureStore from "expo-secure-store";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

export type GetRequest = AxiosRequestConfig | null;

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "",
});
instance.interceptors.request.use(async (config) => {
  const token: string | null = SecureStore.getItem(
    process.env.EXPO_PUBLIC_JWT_TOKEN_NAME!
  );
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const axiosInstance = instance;

export interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "error" | "mutate" | "isLoading"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    "initialData"
  > {
  initialData?: Data;
}

export default function useAxios<Data = unknown, Error = unknown>(
  request: GetRequest | undefined,
  { initialData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    isLoading,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    () => axiosInstance.request<Data>(request!),
    {
      ...config,
    }
  );
  return {
    data: response && response.data,
    response,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
