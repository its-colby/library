import { Inline, Section, Title } from "$lib/tex";
import { STRUCTURES } from "./structures";
import { FIELDS } from "./fields";
import { RINGS } from "./rings";
import { GROUPS } from "./groups";

export const ALGEBRAIC_STRUCTURES = new Section({
    title: new Title({
        inline: new Inline(["Algebraic Structures"]),
    }),
    sections: [
        STRUCTURES,
        FIELDS,
        RINGS,
        GROUPS,
    ]
});