import { healthUtil, types as T } from "../deps.ts";

export const health: T.ExpectedExports.health = {
  "web-ui": healthUtil.checkWebUrl("http://ghost.embassy:2368/ghost/api/admin/site/")
}
