import platfromService, { ParentPlatformData } from "../services/platfrom-service";
import useData from "./useData";

const usePlatform = () => {
  const { data, setData, httpErrors, setHttpErrors, isLoading, setIsLoading } =
    useData<ParentPlatformData>(platfromService);
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
