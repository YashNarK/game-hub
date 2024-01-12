import create from "./http-service";

interface ParentPlatformData {
  id: number;
  name: string;
  slug: string;
}

interface PlatformData {
  platform: ParentPlatformData;
}

export default create("/platforms");
export type { PlatformData,ParentPlatformData };
