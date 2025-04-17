import * as T from "$book";

import { chapter as pentagon } from "./pentagon";
import { chapter as hexagon } from "./hexagon";
import { chapter as square_with_reflections } from "./square-with-reflections";

const introduction = [
    T.Prose.parse(`
        We will now investigate examples and non-examples of cyclic groups in the context of rotational symmetries of regular n-gons.
        These examples demonstrate how pure rotational symmetries form cyclic groups, while adding reflections breaks the cyclic property.
    `),
];

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        pentagon,
        hexagon,
        square_with_reflections,
    ],
    title: T.Prose.parse(`Examples in Rotational Symmetries of Regular n-gons`)
}); 