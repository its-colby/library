# Divisors
On y² = x³ - x:
P = (0,0)
Q = (1,0)
R' = third intersection point

The line is: y = x
div(y-x) = (P) + (Q) + (R') - 3(∞)
where R' = (-1,1)

The vertical line is: x+1
div(x+1) = (R) + (R') - 2(∞)
where R = (-1,-1)

Result: P + Q = R = (-1,-1)

Think of a function like 𝑓(𝑥)=𝑥2−𝑥+6. It has two zeroes: −2 and 3. If I only gave you these two zeroes, you would be able to recreate the original function, up to a constant factor.


## Algebraic Varieties
An algebraic variety is the set of solutions to a system of polynomial equations
Think of it as the geometric shape that emerges when you plot all solutions



# Fields

In particular, all fields of characteristic zero and all finite fields are perfect.

Perfect fields are significant because Galois theory over these fields becomes simpler, since the general Galois assumption of field extensions being separable is automatically satisfied over these fields (see third condition above).

A polynomial is separable if:
- All its roots are distinct
characteristic is to get 0 with multiplicative generator?

- Characteristic must be 0 or prime
- If char = p:
  - p·x = 0 for all elements x
  - (x + y)^p = x^p + y^p (Freshman's dream!)

  In char 0 (like R):
(x + y)² = x² + 2xy + y²

basically charactristic = mod

In char 2 (like F₂):
(x + y)² = x² + y²  (2xy disappears!)

In char 0:
x² - 1 = (x+1)(x-1)  always

In char 2:
x² + 1 = (x+1)²  

affine vs euclidean


Cartier divisors and Weil divisors
Riemann-Roch Theorem, meromorphic function





TODO: 
- Questions re Edwards, Weil, Tate
- Find Applications for homomorphisms, isomorphisms, ideals, Galois in Comp Sci
- Write up Coordinate paper


# BLS

public key = generator ^ private key
signature = hash(message) ^ private key
verification = e(sig, gen) == e(hash, pub)
e(hash ^ private key, gen) 
== 
e(hash, generator ^ private key)

e(a^x, b) = e(a, b^x)






# Weil Pairing
divisor for point P =n(P) - n(O)
divisor for point Q =n(Q) - n(O)
e(P,Q) = (fₚ(Q + S) / fₚ(S)) / (fQ(P - S) / fQ(-S))
where S is an auxiliary point

P,Q are n-torsion points (meaning nP = nQ = O)

We start with a function f whose divisor is div(f) = n(Q) - n(O)
This function exists because n-torsion points give principal divisors

As a result of our projective transformation, it is easy to show that Ois
17
an inflection point and Z = 0 is the tangent line at that point. This gives us that the
pole Ohas multiplicity 3.

ok, so we choose these torsion points in order to guarantee the existence of such divisors. but why do we want the existence of such divisors?

div((fₚ)ᵃ) = a·div(fₚ) 
This means (fₚ)ᵃ and faP have the same divisor!
If two functions have the same divisor, they must be equal up to a constant
https://digitalcommons.unf.edu/cgi/viewcontent.cgi?article=1138&context=etd 



   Instead of evaluating at P or Q directly, we:
   1. Translate the evaluation points by some S
   2. Take ratios to cancel unwanted factors:

   ?????

   1) For point 2P, f_2P has:
   - zeros at 2P, 4P, ..., (n-2)P
   - poles at infinity

2) This f_2P is essentially (f_P)^2 because:
   - f_P has zeros at P, 2P, ..., (n-1)P
   - squaring f_P gives zeros at 2P, 4P, ...


e(2P,Q) = f_2P(Q+S)/f_2P(S) / f_Q(2P-S)/f_Q(-S)
        ≈ (f_P(Q+S)/f_P(S))^2 / f_Q(2P-S)/f_Q(-S)
        = (e(P,Q))^2