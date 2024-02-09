import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "../services/api-client";
import { HttpService } from "../services/http-service";

interface ResponseData<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}

const useData = <T>(
  
  ServiceObject: HttpService,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
  cacheStaleTime?:number,
) => {
  const queryKey = deps || ["data"];

  const queryFn = async () => {
    const { resp } = await ServiceObject.get<ResponseData<T>>(requestConfig);

    return resp.data;
  };
  const staleTime = cacheStaleTime || 1000 * 60 * 10; // The data will remain fresh until 10 mins by default
  const gcTime = 1000 * 60 * 10;
  const placeholderData =  (prevData: ResponseData<T>) => prevData || []

  const { data, error, isLoading, isFetching } = useQuery<ResponseData<T>, AxiosError>({
    queryKey,
    queryFn,
    staleTime,
    gcTime,
  });

  return {
    data: data?.results,
    httpErrors: error?.message,
    isLoading: isLoading || isFetching,
    nextPage: data?.next,
    prevPage: data?.previous,
    placeholderData
  };
};

export default useData;
