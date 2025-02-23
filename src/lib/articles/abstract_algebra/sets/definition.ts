import { Inline, Block, MultiLineStatement, Section, Tex, Title, Note, InlineWrapper, OneLineStatement } from "$lib/tex";

const P0 = new Inline([
    `Abstract algebra fundamentally relies on the concept of a "mathematical set". A "mathematical set" has essentially the same meaning as the English word "set", but it is more precisely defined, and, in practice, exclusively used with "mathematical objects", like numbers, points, geometric shapes, and functions.`
]);

const P1 = new Inline([
    `The first definition below details a typical definition for the English word "set". The second definition states a formal, but naive, definition for a "mathematical set". `
])

const P2 = new Block({
    statements: [
        new InlineWrapper({inline: new Inline([
            `A set is any collection of definite, distinguishable objects of perception or thought conceived as a whole.`
        ])}),
        new OneLineStatement({
            value: new Tex(`\\{x \\mid P(x)\\}`)
        })
    ],
});

const P3 = new Inline([
    new Tex(`P`), ` stands for "predicate". In mathematical logic, a "predicate" `, new Tex(`P(x)`), ` is a statement about `, new Tex(`x`), ` that is either true or false. For example, the statement "`, new Tex(`x > 0`), `" is a predicate. As a side note, I will use the term "mathematical set" and "set" interchangeably from here onwards.`,
]);

const P4 = new Inline([
    `The curly braces "`, new Tex(`\\{`), `" and "`, new Tex(`\\}`), `" are used to denote a set. Anything inside these braces is considered an "element" of the set. The symbol "`, new Tex(`\\mid`), `" is read as "such that", and is used to denote that the objects in the set are subject to the predicate `, new Tex(`P(x)`), `.`,
]);

const P5 = new Inline([
    `In other words, this naive definition amounts to the following: the set is composed of all `, new Tex(`x`), ` such that `, new Tex(`P(x)`), ` is true.`,
]);


const P6 = new Note([
    new Inline([
        `Mathematics cannot rely on the English definition of the word "set" to describe a "mathematical set". The English definition offers no way of unambiguously proving that a certain collection of elements is a set. For example, how would you prove that a particular object is "definite" or "distinguishable" or "of perception".`
    ]),
    new Inline([
        `Creating a mathematical definition of a "mathematical set" is non-trivial. The definition above, classified as the naive definition, is actually subject to many logical paradoxes. The mathematics of "set theory" includes multiple definitions of a "mathematical set" that attempt to avoid such paradoxes. These definitions are outside the scope of abstract algebra. Instead, we will take all commonly used mathematical sets as axiomatically valid, and leave the formalities to set theory. `
    ]),
], new Inline(["A Note on the Definition of a Set"]));

const P7= new Inline([
    `Now that we have looked at the definition of a "mathematical set", we can look at how to define a *particular* "mathematical set". There are three common ways of defining sets. Each of the following "set definitions" will describe the same set, yet in a different manner.`
])

const P8 = Block.from_multiple_statements([
    new Tex(`S = \\{2, 4, 6, 8, 10, 12, 14, 16, 18\\}`),
    new Tex(`S = \\{2, 4, 6, \\ldots\\, 16, 18 \\}`),
    new Tex(`S = \\{x \\mid x \\text{ is an even integer and } 1 < x < 19\\}`),
]);

const P9 = new Inline([
    `The first way is referred to as the "roster method" or "enumerative method". The third way is referred to as the "rule-based method" or "set-builder method". And, the second way is a mixture of both. Note, in the second way, the "` , new Tex(`\\ldots`), `" is used to denote that the pattern continues.`
]);

const P10 = new Inline([
    `Simple sets will usually use the first two ways, while more complicated sets will use the third way. Also, "set-builder notaiton" typically has many more logical and mathematical symbols in the predicates.`
]);

const P11 = new Inline([
    `Logical connectives are outside the scope of abstract algebra, and, instead, belong to the field of "mathematical logic". However, you must understand the following logical connectives and quantifiers: `, new Tex(`\\land`), ` translates to "and", `, new Tex(`\\lor`), ` translates to "or", `, new Tex(`\\neg`), ` translates to "not", `, new Tex(`\\forall x`), ` translates to "for all `, new Tex(`x`), `", and `, new Tex(`\\exists x`), ` translates to "there exists an `, new Tex(`x`), `". It will also be necessary to understand the following logical biconditionals: `, new Tex(`\\implies`), ` translates to "implies", and `, new Tex(`\\iff`), ` translates to "if and only if". Note, that in this paragraph, "translate to", means "should be read as". These symbols when used in logic, are more nuanced than this. However, in the scope of common mathematical sets, this basic translation will suffice.`,
]);

const P12 = new Note([
    new Inline([
        `To demonstrate the nuance of logical connectives, I will evaluate the truthhood of the following proposition: "Men have tails" `, new Tex(`\\or`), ` "Cats have horns". Based on the logical definition of "or", this proposition is true, despite both statements being false. If we wanted this proposition to evalute to false, we would have to use "xor", also called "exclusive or", which is denoted by `, new Tex(`\\oplus`), `.`,
    ]),
], new Inline(["A Note on Logical Connectives"]));

const P13 = new Inline([
    `The following mathematical statement will define a set using "set-builder" notation, logical connectives, and logical quantifiers. It will also introduce the symbol `, new Tex(`\\in`), `, which is read as "is an element of".`
])

const P14 = Block.from_multiple_statements([
    new Tex(`
        S = \\{ \\enspace
        x 
        \\enspace \\mid \\enspace 
        \\forall a \\in \\{2, 4, 6, \\ldots \\}
        \\enspace , \\enspace
        x = a^2 
        \\enspace \\land \\enspace
        x < 20 
        \\enspace \\}
    `),
    new Tex(`S = \\{ 4, 16\\}`)
]);

const P15 = new Inline([
    `This statement translates to: The set `, new Tex(`S`), ` is composed of all `, new Tex(`x`), ` such that `, new Tex(`x`), ` is a square of a positive even integer and `, new Tex(`x`), ` is less than `, new Tex(`20`), `. This set only has two elements, `, new Tex(`4`), ` and `, new Tex(`16`), `.`
]);

const P16 = new Inline([
    `Note, "mathematical sets" can be finite or infinite. Thus, the infinite set of all positive even integers `, new Tex(`\\{2, 4, 6, \\ldots\\}`), ` is just as valid as the finite set of all even integers greater than 1 and less than 20 `, new Tex(`\\{2, 4, 6, \\ldots ,16, 18\\}`), `.`,
])


export const DEFINITION = new Section({
    title: new Title({
        inline: new Inline(["Defining Particular Sets"]),
    }),
    content: [
        P0,
        P1,
        P2,
        P3,
        P4,
        P5,
        P6,
        P7,
        P8,
        P9,
        P10,
        P11,
        P12,
        P13,
        P14,
        P15,
        P16,
    ]
})

