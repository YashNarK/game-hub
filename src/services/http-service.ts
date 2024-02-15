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

  async get<T>( requestConfig?:AxiosRequestConfig) {
    const controller = new AbortController();
    const resp = await apiClient.get<T>(this.endpoint, {
      signal: controller.signal,...requestConfig
    });
    return {
      resp,
      cancel: () => {
        controller.abort();
      },
    };
  }

  async getAll<T>(requestConfig?:AxiosRequestConfig) {
    const controller = new AbortController();
    const resp = await apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,...requestConfig
    });
    return {
      resp,
      cancel: () => {
        controller.abort();
      },
    };
  }

  async getByID<T extends Entity>(entity: T) {
    const resp = await apiClient.get<T>(this.endpoint + "/" + entity.id);
    return resp;
  }

  async getBySlug<T extends Entity>(entity: T) {
    const resp = await apiClient.get<T>(this.endpoint + "/" + entity.slug);
    return resp;
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
export { HttpService };
