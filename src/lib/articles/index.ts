import { mathematics } from "$lib/articles/mathematics";
import { algorithms } from "$lib/articles/algorithms";
import { music } from "$lib/articles/music";

export const folders = [
    mathematics,
    algorithms,
    music
] as const;

export * from "./utils";