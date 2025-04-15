import { page as rings } from "./rings";
import { page as algebras } from "./algebras";
import { Category } from "$lib/content/utils/category";

export const category = new Category("Foundations", [rings, algebras]);

