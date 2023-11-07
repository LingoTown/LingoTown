import { AxiosError, InternalAxiosRequestConfig } from "axios";


const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = localStorage.getItem('userAtom') != null ? `Bearer ` + JSON.parse(localStorage.getItem('userAtom')!).userAtom.accessToken:"";
  config.headers.Authorization = accessToken;
  return config;
};

const onErrorRequest = (err: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(err);
};


export {onRequest, onErrorRequest};