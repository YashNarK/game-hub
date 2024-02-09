import platfromService, {
  ParentPlatformData,
} from "../services/platfrom-service";
import useData from "./useData";
import { AxiosRequestConfig } from "axios";

const usePlatform = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const { data, httpErrors, isLoading } = useData<ParentPlatformData>(
    platfromService,
    requestConfig,
    deps || ["platforms"],
    1000*60*60*24*1
  );
  return {
    platforms: data,
    httpErrors,
    isLoading,
  };
};

export default usePlatform;
