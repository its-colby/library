trial division by each prime till square root of n

diophantine equation = polynomial with integer coefficients
factor base = set of primes
smooth number = factors across factor base 

assume x^2 + dn = y^2
x^2 - y^2 = dn
(x-y)(x+y) = dn
a * b = dn
p1p2p3 * q1q2q3 = dn
n must completelyfactor over the factors of a and b
gcd(a, n) = factor_a or 1
gcd(b, n) = factor_b or 1

Dixon - define factor base. get random integers. ensure each int squared mod n is smooth. 0 for even power and 1 for odd power in factor base.

dixon - trial divide from factor base each random int squared mod n, to see if its smooth

lin alg - if more than length of factor base numbers are found, exists non-trivial dependecy. 

quadratic sieve. ensure each int squared - n is smooth. 

quad - change focus. fix a prime, and see what values divide it