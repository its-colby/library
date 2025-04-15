import { Folder } from "$lib/content/utils";
import { Category } from "$lib/content/utils/category";


import { category as rings } from "./rings";
import { category as foundations } from "./foundations";
import { category as ideals } from "./ideals";
import { category as domains } from "./domains";

export const folder = new Folder({
    title: "Ring Theory",
    categories: [rings, ideals, domains, foundations],
});