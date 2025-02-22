import { Inline, Section, Title } from "$lib/tex";
import { INTRODUCTION } from "./intro";
import { SETS } from "./sets";
import { OPERATIONS } from "./operations";
import { STRUCTURES } from "./structures";

export const ALGEBRAIC_STRUCTURES = new Section({
    title: new Title({
        inline: new Inline(["Algebraic Structures"]),
    }),
    sections: [
        INTRODUCTION,
        SETS,
        OPERATIONS,
        STRUCTURES,
    ]
});