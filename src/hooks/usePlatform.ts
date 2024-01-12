import platfromService, { PlatformData } from "../services/platfrom-service";
import useData from "./useData";

const usePlatform = () => {
  const { data, setData, httpErrors, setHttpErrors, isLoading, setIsLoading } =
    useData<PlatformData>(platfromService);
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
