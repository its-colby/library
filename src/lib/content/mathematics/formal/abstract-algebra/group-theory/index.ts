import { Folder } from "$lib/content/utils";
import { Category } from "$lib/content/utils/category";



import { category as substructures } from "./substructures";
import { category as by_family } from "./by-family";
import { category as by_property } from "./by-property";
import { category as foundations } from "./foundations";
import { category as products } from "./products";

export const folder = new Folder({
    title: "Group Theory",
    categories: [
        by_family,
        by_property,
        substructures,
        foundations,
        products,
    ],
});


// commutators
// center of a group
// group actions
// orbit/stabilizer
// jordan holder theorem
// orbit of x under conjugation?
// abelian groups - trivial conjugation
// so a conjugacy class tells groups things by "type of symmetry", regardless of orientation?