// modules - vector spaces that aren't necessarily commutative or 
// have division

// the set of scalaras is a ring
// ideals and quotient rings are modules??
// 


import * as T from "$lib/tex";

const gaussian_over_gaussian = T.Inline.parse(`
    Let the ring of scalars be the ring of Gaussian Integers. Let the module elements also be Gaussian Integers. Every module element can be written as a 1 * a member from the ring of scalar. Thus, the basis is {1}. Since, this module has a basis, it is called a free module. Since, the basis has only one element, it is called a free module of rank 1.
`);

const gaussian_over_integers = T.Inline.parse(`
    Let the ring of scalars be the ring of Integers. Let the module elements be the Gaussian Integers. Every Gaussian Integer can be written as a linear combination of 1 and i, drawing from the ring of scalars. Thus, the basis is {1, i}. Since, this module has a basis, it is called a free module. Since, the basis has two elements, it is called a free module of rank 2.
`);

const prime_ideal_over_z_rt_neg_5 = T.Inline.parse(`
    Let the ring of scalars be Z[sqrt(-5)]. Let the module elements be the the elements of the ideal (2, 1 + sqrt(-5)). The module elements can be written as a linear combination of 2 and 1 + sqrt(-5), drawing from the ring of scalars. 
`);



// over Z, over R[x], over Matrix Rings, ALg. Ints. 

// module is just additive abelian group and scalar mult.
// consider ideal (4), all vectors are multiples of 4.
// 4 is the basis element.

// z/6z is a module over Z
// the vectors are {0, 1, 2, 3, 4, 5}
// every element is torsion


// free module - a module with a basis (no nonzero torsion elements)
// modules with torsion elements can still have free parts?

// Z direct-sum Z/2Z as Z-module: (a, 0) and (a, 1), where a comes from Z
// the submodule Z direct-sume {0} is free (basis (1,0))


// Z Z-module - elements are integers {1} is basis
// (3Z) is a submodule of Z Z-module




// Z^2 as Z module
// regular basis (same as i hat j hat)

// ablelian groups are modules over Z?

// homomorphisms between modules

// modules could be scaled/measured by the ring elements, from modulus, meaning unit of measurement
// module elemnts are analogous to vectors


// 



// for instance, not all modules have a basis, and, even for those that do (free modules), the number of elements in a basis need not be the same for all bases (that is to say that they may not have a unique rank) if the underlying ring does not satisfy the invariant basis number condition, unlike vector spaces, which always have a (possibly infinite) basis whose cardinality is then unique. 

// left and righ modules

// submodules

// also non-unital modules

// types of modules - finitely generated, free, projective, flat, injective, torsionless, simple, semisimple, indecomposable, faithful, torsion-free, noetherian, artinian, graded, uniform

// 