import { page as local_rings } from "./local-rings";
import { page as simple_rings } from "./simple-rings";
import { page as boolean_rings } from "./boolean-rings";
import { Category } from "$lib/content/utils/category";

export const category = new Category("Rings", [local_rings, simple_rings, boolean_rings]);
