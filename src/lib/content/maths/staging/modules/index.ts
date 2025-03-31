import * as T from "$lib/book";
import { projective_modules } from "./projective";
import { submodules } from "./submodules";
import { torsion_modules } from "./torsion";
import { free_modules } from "./free";

export const modules = T.BookChapter.from_subchapters({
    subchapters: [
        projective_modules,
        torsion_modules,
        free_modules,
        submodules,
    ],
    title: T.Prose.parse(`Modules`),
});


// modules
// ----- essentially an abelian group (with scalar multiplication by ring)
// ----- main point of modules is to capture torsion? because you can't do that with vector spaces


// faithful
// ----- when annihilator is trivial, Ann(M) = {0}

// noetherian module
// ----- ascending chain condition on submodules
// ----- Q as a Z-module is not noetherian, Z sub 1/2 Z sub 1/4 Z sub 1/8 Z ...



// Z-module Z
// ----- free module of rank 1
// ----- basis {1}, n_z * 1 = any element of Z
// ----- submodules are ideals of Z


// Z-module Z[rt -5]
// ----- free module of rank 2, basis {1, rt -5}
// ----- torsion-free
// ----- has ring structure

// Z[x]-module Z
// ----- action -> evaluate Z[x] at a point 0
// ----- not free
// ----- every polynomial w/out constant term annihilates each element of Z
// ----- entirely torsion

// Prufer p-group
// ----- complex roots of unity whose orders are powers of a prime p
// ----- any element is killed by some power of p

// Z-module Q where denom not divisible by p
// ----- free part (elements not divisible by p)

// p-adic integers over z?


// torsion = every element has finite order
// free implies torsion-free?
// Fundamental Theorem of Finitely Generated Modules over PIDs
// Structure Theorem for Finitely Generated Modules over PIDs
// Classification of Finitely Generated Abelian Groups (as Z-modules)
// Rank-Nullity for Modules
// different bases?


// types of modules - finitely generated, free, projective, flat, injective, torsionless, simple, semisimple, indecomposable, faithful, torsion-free, noetherian, artinian, graded, uniform