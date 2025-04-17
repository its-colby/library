import * as T from "$book";
import { chapter as fourth_roots } from "./4th-roots";
import { chapter as sixth_roots } from "./6th-roots";

const introduction = [
    T.Prose.parse(`
        We will now investigate examples and non-examples of cyclic groups in the context of roots of unity.
        These examples demonstrate how pure roots of unity form cyclic groups under multiplication, while adjoining additional elements can break this property.
    `),
];

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        fourth_roots,
        sixth_roots,
    ],
    title: T.Prose.parse(`Roots of Unity $$\\zeta_n$$`)
}); 