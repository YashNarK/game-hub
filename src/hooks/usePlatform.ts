import platfromService, { ParentPlatformData } from "../services/platfrom-service";
import useData from "./useData";
import { AxiosRequestConfig } from 'axios';

const usePlatform = (requestConfig?:AxiosRequestConfig,deps?:any[]) => {
  const { data, setData, httpErrors, setHttpErrors, isLoading, setIsLoading } =
    useData<ParentPlatformData>(platfromService,requestConfig, deps);
  return {
    platforms: data,
    setPlatforms: setData,
    httpErrors,
    setHttpErrors,
    isLoading,
    setIsLoading,
  };
};

export default usePlatform;
