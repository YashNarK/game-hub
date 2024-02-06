import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "../services/api-client";
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
  const queryKey = deps || ["data"];
  const queryFn = async () => {
    const { resp } = await ServiceObject.get<ResponseData<T>>(requestConfig);
    return resp.data.results;
  };
  const staleTime = 1000 * 60 * 10; // The data will remain fresh until 10 mins

  const { data, error, isLoading, isFetching } = useQuery<T[], AxiosError>({
    queryKey,
    queryFn,
    staleTime,
  });

  return {
    data,
    httpErrors: error?.message,
    isLoading: isLoading || isFetching,
  };
};

export default useData;
