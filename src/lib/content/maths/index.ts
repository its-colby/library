import { staging_webpage } from "./staging";
import { Folder } from "../utils";

import { maximal_ideals_webpage } from "./maximal-ideals";

export const mathematics = new Folder({
    title: "Mathematics",
    pages: [
        staging_webpage,
        maximal_ideals_webpage,
    ]
})