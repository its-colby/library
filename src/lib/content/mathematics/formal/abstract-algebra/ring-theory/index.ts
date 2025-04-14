import { Folder } from "$lib/content/utils";
import { Category } from "$lib/content/utils/category";


import { category as rings } from "./rings";
import { page as algebras} from "./algebras";
import { category as ideals } from "./ideals";

const misc = new Category("Miscellaneous", [algebras]);

export const folder = new Folder({
    title: "Ring Theory",
    categories: [rings, ideals, misc],
});