import { useEffect, useState } from "react";

import { AxiosError } from "../services/api-client";
import { HttpService } from "../services/http-service";

interface ResponseData<T> {
  results: T[];
}

const useData = <T>(ServiceObject: HttpService) => {
  const [data, setData] = useState<T[]>([]);
  const [httpErrors, setHttpErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controllerAbort: () => void;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { resp, cancel } = await ServiceObject.get<ResponseData<T>>();
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
