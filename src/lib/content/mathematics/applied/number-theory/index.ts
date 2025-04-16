import { Folder } from "$directory";

import { folder as arithmetic } from "./arithmetic";
import { folder as computational } from "./computational";

export const folder = new Folder({
    title: "Number Theory",
    folders: [
        arithmetic,
        computational,
    ],
});


// modular arithmetic
// -- chinese remainder, quad residues (jacobi, eulers theorem, legendre)
// -- fermats little theorem, eulers totient, gcd, lcm
// -- wilsons theorem, inverses modulo, eucliean algo, 
// -- diophantine equations (applied)
// -- mobius function, dirichlet series, zeta function, mobius inversion
// -- eulers criterion, 
// -- UFDs, class field theory, 
// -- analytic number theory
// 