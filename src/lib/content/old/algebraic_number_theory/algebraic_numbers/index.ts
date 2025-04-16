import { DEFINITION_SECTION } from "./definition";
import { RATIONALS_SECTION } from "./rationals";
import { ROOTS_SECTION } from "./roots";
import { Section, Inline, Title } from "$lib/tex";

export const THE_SET_OF_ALGEBRAIC_NUMBERS_SECTION = new Section({
    title: new Title({
        value: "The Set of Algebraic Numbers",
    }),
    sections: [
        DEFINITION_SECTION,
        RATIONALS_SECTION,
        ROOTS_SECTION
    ]
});