import { Inline, Section, Title } from "$lib/tex";

import { DEFINITION } from "./definition";
import { OPERATORS } from "./operators";
import { PROPERTIES } from "./properties";

export const OPERATIONS = new Section({
    title: new Title({
        value: "Operations",
    }),
    sections: [
        DEFINITION,
        OPERATORS,
        PROPERTIES,
    ]
})