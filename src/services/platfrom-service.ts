import create from "./http-service";


interface PlatformData {
    platform: { id: number; name: string; slug: string };
  }

  export default create("/platforms");
  export type {PlatformData};