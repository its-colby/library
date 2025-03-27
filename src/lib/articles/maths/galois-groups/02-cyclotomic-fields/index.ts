import { Section, Title } from "$lib/tex";
import { REVIEW } from "./review";
import { GENERALIZATION } from "./generalization";

export const CYCLOTOMIC_FIELDS = new Section({
    title: new Title({
        value: "Cyclotomic Fields",
    }),
    sections: [
        REVIEW,
        GENERALIZATION,
    ]
})