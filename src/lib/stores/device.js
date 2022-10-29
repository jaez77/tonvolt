import { readable } from "svelte/store";
import UAParser from "ua-parser-js";

let _deviceType, _deviceOS;
if (typeof window !== "undefined") {
  const uaParser = new UAParser();
  _deviceType = uaParser.getDevice().type;
  _deviceOS = uaParser.getOS().name;
}

export const deviceType = readable(_deviceType);
export const deviceOS = readable(_deviceOS);