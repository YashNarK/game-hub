import { useEffect, useState } from "react";

import { AxiosError, CanceledError, AxiosRequestConfig } from "../services/api-client";
import { HttpService } from "../services/http-service";

interface ResponseData<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  ServiceObject: HttpService,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [httpErrors, setHttpErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      let controllerAbort: () => void;

      const fetchData = async () => {
        try {
          setIsLoading(true);
          const { resp, cancel } = await ServiceObject.get<ResponseData<T>>(
            requestConfig
          );
          controllerAbort = cancel;
          const DataList = resp.data.results;
          setData(DataList);
          setHttpErrors("");
        } catch (error) {
          if (error instanceof CanceledError) return;
          const err = error as AxiosError;
          setHttpErrors(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();

      return () => controllerAbort && controllerAbort();
    },
    deps ? [...deps] : []
  );

  return {
    data,
    httpErrors,
    isLoading,
    setData,
    setHttpErrors,
    setIsLoading,
  };
};

export default useData;
