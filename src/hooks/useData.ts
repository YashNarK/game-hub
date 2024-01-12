import { useEffect, useState } from "react";

import { AxiosError } from "../services/api-client";
import { HttpService } from "../services/http-service";
import { AxiosRequestConfig } from "axios";

interface ResponseData<T> {
  count: number;
  results: T[];
}

const useData = <T>(ServiceObject: HttpService, requestConfig?:AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [httpErrors, setHttpErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controllerAbort: () => void;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { resp, cancel } = await ServiceObject.get<ResponseData<T>>(requestConfig);
        controllerAbort = cancel;
        const DataList = resp.data.results;
        setData(DataList);
        setHttpErrors("");
      } catch (error) {
        const err = error as AxiosError;
        setHttpErrors(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controllerAbort && controllerAbort();
  }, []);

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
