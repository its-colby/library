import { Section, Inline, Title } from "$lib/tex";
import { GOALS_SECTION } from "./goals";
import { PREREQS_SECTION } from "./prereqs";

const TITLE = new Title({
    value: "Preface"
});

export const PREFACE_SECTION = new Section({
    title: TITLE,
    sections: [
        GOALS_SECTION,
        PREREQS_SECTION
    ]
});