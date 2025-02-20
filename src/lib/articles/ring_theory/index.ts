import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";

export const metadata = new Page({
    title: "Ring Theory",
    url: "/mathematics/ring-theory",
});

const SECTION_1 = new Section({
    title: new Title({
        inline: new Inline(["Introduction"]),
    }),
    sections: [
        new Section({
            title: new Title({
                inline: new Inline(["P1"]),
            }),
            content: [
                new Inline([
                    "This is the first section of the article."
                ])
            ]
        })
    ]
});

export const CONTENT = new Section({
    title: new Title({
        inline: new Inline([metadata.title]),
        index_type: IndexType.NONE
    }),
    sections: [
        SECTION_1
    ]
});

CONTENT.assign_indices({});