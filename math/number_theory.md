Complex Numbers
    - a + bi, where a, b are real numbers.
    - algebraically closed field
    - euclidean vector space
    - commutative algebra over R
    - polar representation
    - de Moivre's formula
    - euler's formula
    - construction as quotient field of polynomials
    - matrix representation

Algebraic Numbers
    - complex numbers without trascendental numbers
    - 

Number Fields

Quadratic Fields

Gaussian Integers


# [text](https://eclass.uoa.gr/modules/document/file.php/MATH594/Stewart%20Galois%204th%20edition.pdf)













# Definitions
- An algebraic number is a complex number that is a root of a non-zero polynomial with rational coefficients.
- A number field is a finite subfield of the complex field.
- Galois conjugates are the different roots of the minimal polynomial, and they describe how the number field can be embedded into C
- an algebraic integer is a complex number that is a root of a monic polynomial with integer coefficients.
- the ring of integers of a number field is = the intersection of the number field and the algebraic integers.
- an integral basis for the ring of integers of a number field is basis where each var is in O and the coefficients are in Z.
- a quadratic field is a number field of degree 2. it can be shown that the ring of integers can easily be found as one of two cases depending on if d is congruent to 1 mod 4. we can also easily prove simple formulas for integral basis and discriminant.
- gaussian integers are a special historical case of quadratic fields.
- cyclotomic fields are number fields of the form Q(zeta_n) where zeta_n is a primitive nth root of unity.
- proper factors, unit, associates

# Theorems
- The set of algebraic numbers is a subfield of the complex field.
- Every element of a number field is algebraic.
- A number field is a finite extension of the rational numbers.
- The degree of the minimum polynomial defines the number of roots which defines the degree of the field extension. The degree of the field extension is also the number of monomorphisms from the field to the complex field. Apparently, to be a homomorphism, it must still satisfy the minimal polynomial, so of course it is only the roots.
- If every K-conjugate is distinct, the field extension is Galois, meaning it has a nice group of automorphisms.
- the algebraic integers form a subring of the algebraic numbers.
- if the monic polynomial has algebraic integer coefficients, then the roots are still algebraic integers.
- the ring of integers of the rational number field Q is the integers Z, as algebraic integers do not include fractions of integers.
- an integral basis always exists for a number field.
- for an algebraic integer α, the sum and product of all its conjugates (roots of its minimal polynomial) are always rational integers.
- The sum of the roots (conjugates) of the polynomial is the negative of the coefficient of the second highest term, divided by the leading coefficient (which is 1 for monic polynomials). This sum is a rational integer.
- The product of the roots is the constant term (up to sign) of the polynomial, divided by the leading coefficient. This product is also a rational integer.
- The discriminant of any basis over Q of a number field can be computed using the norm or trace.
- it turns out finding the ring of integers and an integral basis is hard? given a number field.
- factorization into irreducibles is always possible in a noetherian ring.
- the ring B of all algebraic integers is indeed non-Noetherian. and therefore cant factor into irreducibles
- let x and y be in the ring of integers of a number field K. x is unit if and only if norm x is +/- 1. 
- a euclidean domain is a domain that has euclidean function, and all euclidean domains are PIDs and all PIDs are UFDs.


elementary number theory
analytic number theory
algebraic number theory
computational number theory
diophantine equations

euclidean algorithm
greatest common divisor
fundamental theorem of arithmetic
chinese remainder theorem
primality testing
factorization
algebraic integers
fermats last theorem
Riemann hypothesis
Riemann zeta function
Euler-Maclaurin Formula
Ramanujan’s asymptotic formula
Dirichlet L-functions
Euler/Carmichael totient functions
mobius function
dirichlet series
fermat's little theorem
mersenne primes
legendre symbol
quadratic reciprocity
goldbach's conjecture
wilson's theorem
sieve of eratosthenes
extended euclidean algorithm
general number field sieve
Euler’s Product Formula
Chebyshev’s Bias
Fast Fourier Transform (FFT) for Prime Testing
Miller-Rabin Primality Test
Elliptic Curve Factorization
AKS Primality Test
dedekind domains
Hilbert’s Class Field Theory
Minkowski’s Theorem
Lenstra Elliptic Curve Factorization
continued fractions
Mordell’s Conjecture
Pell’s Equation
Thue’s Equation
Chabauty’s Method
Discrete Logarithm Problem
Pollard’s Rho Algorithm

Z[rt-5] is not a UFD, but it is a Dedekind domain.
Gaussian Integers Z[i] is a UFD.
ring of integers of a number field is a Dedekind domain.



https://wstein.org/books/ant/ant.pdf
https://kashanu.ac.ir/Files/Content/ANT.pdf


https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
https://www.maths.ed.ac.uk/~v1ranick/papers/mollin.pdf


https://math.uchicago.edu/~may/REU2015/REUPapers/Guo.pdf 
gauss's lemma
Every PID is a UFD
dedekind domain
Dedekind domains generalize UFDs by allowing "unique factorization of ideals" rather than elements.
Ideal Class Group
Lifting Solutions (Hensel's Lemma)
Norms of Ideals
Minkowski's Theorem (Lattice Point Theorem)
discrete valuation ring 
Class Number Formula
Dirichlet's Unit Theorem