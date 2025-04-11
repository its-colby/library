import { Folder } from "../../utils";

import { page as algebras_page} from "./algebras";
import { pages as ideals_pages } from "./ideals";

export const ring_theory = new Folder({
    title: "Ring Theory",
    pages: [
        algebras_page,
        ...ideals_pages,
    ],
    published: true
});