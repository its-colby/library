import { page as maximal_ideals } from "./maximal-ideals";
import { page as prime_ideals } from "./prime-ideals";
import { Category } from "$lib/content/utils/category";

export const category = new Category("Ideals", [maximal_ideals, prime_ideals]);

