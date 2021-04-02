/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from "axios";
import axios from "./axiosConfig";

export default class ServiceBase {
  constructor() {
    this.config = {};
  }

  config: AxiosRequestConfig;

  delete = async <P>(url: string) => {
    const result = await axios.delete<P>(url, this.config);
    return result.data;
  };

  get = async <P>(url: string) => {
    const result = await axios.get<P>(url, this.config);
    return result.data;
  };

  post = async <P>(url: string, data?: any) => {
    const result = await axios.post<P>(url, data, this.config);
    return result.data;
  };

  put = async <P>(url: string, data?: any) => {
    const result = await axios.put<P>(url, data, this.config);
    return result.data;
  };
}
