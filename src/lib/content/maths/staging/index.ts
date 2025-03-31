import { Webpage } from "../../utils";
import * as T from "$lib/book";
import { maximal_ideals } from "./maximal-ideals";
import { modules } from "./modules";

export const staging_webpage = new Webpage({
    title: "Staging",
    url: "/mathematics/staging",
    published: false,
});

export const staging_document = T.BookChapter.new_document({
    chapters: [
        maximal_ideals,
        modules,
    ],
    title: staging_webpage.title
});


// TODO:
// - bezout domain, gcd domain, ed, integral domain, integrally closed domain, dedekind domain
// minimal, radical, nilpotent, nil, nilradical, noetherian, artinian, skew field, fractioanl, primitive, primary, localization, group ring, burnside rings, injective modules, hilberts theorems, resultants, hensel's lemma, irreducibility/factorization, krull domain




/*
prime ideals
- krull dimension
- supremum

principal ideals

principal ideal domains

dedekind domains

UFDs







*/






// groups

// galois

// number systems

// number theory

// algebraic geometry

// topology

// clean-up