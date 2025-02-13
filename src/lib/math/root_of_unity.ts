import { type TEX } from "$lib/math/tex";
import { cdot } from "./utils";

const algebraic_constants = {
    1: {
        1: '1' as TEX   
    },
    2: {
        1: '1' as TEX,
        2: '-1' as TEX,
    },
    3: {
        1: '1' as TEX,
        2: String.raw`\frac{-1 + i\sqrt{3}}{2}` as TEX,
        3: String.raw`\frac{-1 - i\sqrt{3}}{2}` as TEX,
    },
    4: {
        1: '1' as TEX,
        2: 'i' as TEX,
        3: '-1' as TEX,
        4: '-i' as TEX,
    }  
}

export class RootOfUnity {
    public nth_root: number;
    public exponent: number;

    constructor({ 
        nth_root, 
        exponent 
    }: { 
        nth_root: number, 
        exponent?: number
    }) {
        this.nth_root = nth_root;
        this.exponent = exponent ?? 1;
    }

    private omega_or_zeta({
        kind, 
        exponent 
    }: { 
        kind: 'omega' | 'zeta', 
        exponent: number
    }): TEX {
        const exp = (exponent === 1 ? '' : `^${exponent}`) as TEX;
        const deg = (this.nth_root === 1 ? '' : `_${this.nth_root}`) as TEX;
        return `\\${kind}${exp}${deg}` as TEX; 
    }

    public omega({ 
        exponent 
    }: { 
        exponent: number 
    } = {
        exponent: this.exponent
    }): TEX {
        return this.omega_or_zeta({
            kind: 'omega', 
            exponent
        })
    }

    public zeta({ 
        exponent 
    }: { 
        exponent: number 
    } = {
        exponent: this.exponent
    }): TEX { 
        return this.omega_or_zeta({
            kind: 'zeta', 
            exponent
        })
    }

    private exponential_or_radical({
        kind, 
        exponent 
    }: { 
        kind: 'exponential' | 'radical', 
        exponent: number 
    }): TEX {
        const scalar = (exponent === 1 ? '' : cdot('' as TEX, exponent.toString() as TEX)) as TEX;
        if (kind === 'exponential') {
            const deg = (this.nth_root === 1 ? '' : ` / ${this.nth_root}`) as TEX;
            return `e^{2\\pi i${scalar}${deg}}` as TEX;
        } else {
            return `\\sqrt[${this.nth_root}]{e^{2\\pi i${scalar}}}` as TEX;
        }
    }

    public exponential({ 
        exponent 
    }: { 
        exponent: number 
    } = {
        exponent: this.exponent
    }): TEX { 
        return this.exponential_or_radical({
            kind: 'exponential', 
            exponent
        })
    }

    public radical({ 
        exponent 
    }: { 
        exponent: number 
    } = {
        exponent: this.exponent
    }): TEX { 
        if (this.nth_root === 1) { return this.exponential({ exponent })}
        return this.exponential_or_radical({
            kind: 'radical', 
            exponent
        })
    }

    public algebraic(): TEX {
        if (this.nth_root >= 1 && this.nth_root <=4) {
            const constants = algebraic_constants[this.nth_root as 1 | 2 | 3 | 4];
            if (this.exponent >= 1 && this.exponent <= this.nth_root) {
                return constants[this.exponent as keyof typeof constants]
            }
        }
        return this.exponential()
    }

    public static equivalence_property1(): TEX {
        return String.raw`\frac{1}{\zeta} = \overline{\zeta}` as TEX;
        // applies to all polar coordinates
    }

    // mod prop

    public static get definition(): TEX {
        return String.raw`x^n = 1` as TEX
    }

    public static get factorization(): TEX {
        return String.raw`(x-1)(x^{n-1} + ... + 1) = 0` as TEX
        // maybe allow plugging in values?
        // derive
    }

    public static get formula(): TEX {
        return String.raw`x = e^{\frac{2\pi i k}{n}}, k = 0, ..., n-1` as TEX
        // derive
    }

    public static get cyclotomic_polynomial(): TEX {
        return String.raw`\displaystyle \Phi_{n}(x) = \prod_{d|n} (x^d - 1)^{\mu(\frac{n}{d})}` as TEX
    }

    public static get cyclotomic_polynomial_definition(): TEX {
        return String.raw`\displaystyle \Phi_{n}(x) = \prod_{k=1}^{\varphi(n)} (x - z_{k})` as TEX
    }

    public static get primitive_definition(): TEX {
        return String.raw`x^n = 1, x^k \neq 1 \text{ for } 1 \leq k \leq n - 1` as TEX
    }

}

// root of unity definition
// factors
// general formula
// cyclotomic polynomial and eulers totient function
// primitive roots
// conjugates and reciprocals, periodicity, cyclic group
// splitting fields
// cyclotomic fields
// basis

// misc — reciprocal polynomial, de moivre's theorem, complex conjugate root theorem, eulers identity, algebraic numbers, Vieta’s formula for roots of unity, eisenstein criterion, mobius inversion,

// modules, free, torsion,vector spaces, bases, field extensions, algebraic numbers, minimal polynomials, irreducible polynomials, galois group, symmetry groups, 

// applications - Discrete Fourier Transform (DFT) & Fast Fourier Transform (FFT) and multiplication of polynomials?, shamir secret sharing, galois theory, constructing n-gons with ruler and compass,
