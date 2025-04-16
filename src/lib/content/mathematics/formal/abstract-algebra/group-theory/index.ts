import { Folder } from "$directory";



import { folder as substructures } from "./substructures";
import { folder as by_family } from "./by-family";
import { folder as by_property } from "./by-property";
import { folder as foundations } from "./foundations";
import { folder as products } from "./products";

export const folder = new Folder({
    title: "Group Theory",
    folders: [
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