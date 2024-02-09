import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "../services/api-client";
import { HttpService } from "../services/http-service";
import { ResponseData } from "../interfaces/response.type";



const useData = <T>(
  
  ServiceObject: HttpService,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
  cacheStaleTime?:number,
  oldInitialData?:ResponseData<T> 
) => {
  const queryKey = deps || ["data"];

  const queryFn = async () => {
    const { resp } = await ServiceObject.get<ResponseData<T>>(requestConfig);

    return resp.data;
  };
  const staleTime = cacheStaleTime || 1000 * 60 * 10; // The data will remain fresh until 10 mins by default
  const gcTime = 1000 * 60 * 10;

  const { data, error, isLoading, isFetching } = useQuery<ResponseData<T>, AxiosError>({
    queryKey,
    queryFn,
    staleTime,
    gcTime,
    initialData: oldInitialData
  });

  return {
    data: data?.results,
    httpErrors: error?.message,
    isLoading: isLoading || isFetching,
    nextPage: data?.next,
    prevPage: data?.previous,
  };
};

export default useData;
