import * as T from "$book";

export const chapter = T.Exposition.from([
    T.Prose.parse(`
        Imagine homomorphism from $$Z/pZ$$ to the squares subgroup. The kernel is 1 and -1. Thus, by first isomorphism theorem, the squares subgroup is index 2, order $$p-1/2$$. look at non-subgroup of non-squares. look at homomorphism of the regular group quotiented by squares subgroup and mapped to subgroup of 1 and -1. and see which values map to which.
    `),

], T.Prose.parse(`Euler's Criterion`));