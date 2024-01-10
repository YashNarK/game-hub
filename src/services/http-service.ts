import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint =
      endpoint[endpoint.length - 1] === "/" ? endpoint : endpoint + "/";
  }

  async getAll<T>() {
    const controller = new AbortController();
    const resp = await apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return {
      resp,
      cancel: () => {
        controller.abort();
      },
    };
  }

  async getByID<T extends Entity>(entity: T) {
    const resp = await apiClient.get<T>(this.endpoint + entity.id);
    return resp;
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
