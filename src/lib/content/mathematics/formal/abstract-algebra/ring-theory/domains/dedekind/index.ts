import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A Dedekind domain.
    `),
], T.Prose.parse(`Dedekind Domains`));

export const file = File.from_chapter(chapter);
/*

Dedekind Domains
- the Dedekind–Kummer theorem describes how a prime ideal in a Dedekind domain factors over the domain's integral closure
- equivalent definitions: (DD1) Every nonzero proper ideal factors into primes.
(DD2) 
R
{\displaystyle R} is Noetherian, and the localization at each maximal ideal is a discrete valuation ring.
(DD3) Every nonzero fractional ideal of 
R
{\displaystyle R} is invertible.
(DD4) 
R
{\displaystyle R} is an integrally closed, Noetherian domain with Krull dimension one (that is, every nonzero prime ideal is maximal).
- Krull domain
- Theorem: Let R be a Dedekind domain with fraction field K. Let L be a finite degree field extension of K and denote by S the integral closure of R in L. Then S is itself a Dedekind domain. Applying this theorem when R is itself a PID gives us a way of building Dedekind domains out of PIDs. 
- There exist integral domains 
R
{\displaystyle R} that are locally but not globally Dedekind: the localization of 
R
{\displaystyle R} at each maximal ideal is a Dedekind ring (equivalently, a DVR) but 
R
{\displaystyle R} itself is not Dedekind. As mentioned above, such a ring cannot be Noetherian.



*/