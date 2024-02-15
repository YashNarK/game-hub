import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

interface Entity {
  id: number;
  slug?: string;
}

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async get<T>(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    const resp = await apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });
    return {
      resp,
      cancel: () => {
        controller.abort();
      },
    };
  }

  async getAll<T>(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    const resp = await apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });
    return {
      resp,
      cancel: () => {
        controller.abort();
      },
    };
  }

  async getByID<T extends Entity>(id: number) {
    const resp = await apiClient.get<T>(this.endpoint + "/" + id);
    return resp;
  }

  async getBySlug<T extends Entity>(slug: string) {
    const resp = await apiClient.get<T>(this.endpoint + "/" + slug);
    return resp;
  }

  async getDataByID<T extends Entity>(id: number, dataPath: string) {
    const resp = await apiClient.get<T>(this.endpoint + "/" + id + dataPath);
    return resp;
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
export { HttpService };
