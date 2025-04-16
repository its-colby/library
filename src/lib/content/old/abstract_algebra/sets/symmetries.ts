import { Inline, Section, Title, Tex, Block, List, InlineWrapper } from "$lib/tex";

const P1 = new Inline([
    `Another type of function that is commonly used in abstract algebra are sets of symmetrical transformations. A symmetrical transformation is a function that takes an object, performs a transformation, and produces a congruent object.`
]);

const P2 = new Inline([
    `For example, consider a square fixed at its center. If you rotate it 90 degrees clockwise, its overall appearance remains unchanged. This is a symmetrical transformation. While the square appears identical before and after, we say the shapes are congruent rather than equal. To understand the difference, imagine marking the bottom right corner with a dot - after rotation, that marked corner would now be at the bottom left position, even though the square's overall shape is unchanged.`,
]);

const P3 = new Inline([
    `The following represents the set of all symmetrical transformations of a square fixed at its center.`
]);

const P4 = new List([
    new Inline([`90 degree clockwise rotation`]),
    new Inline([`180 degree clockwise rotation`]),
    new Inline([`270 degree clockwise rotation`]),
    new Inline([`360 a.k.a 0 degree clockwise rotation`]),
    new Inline([`Horizontal flip`]),
    new Inline([`Vertical flip`]),
    new Inline([`Diagonal flip: top right to bottom left`]),
    new Inline([`Diagonal flip: top left to bottom right`]),
]);

export const SYMMETRIES = new Section({
    title: new Title({
        value: "Sets of Symmetries",
    }),
    content: [
        P1,
        P2,
        P3, 
        P4,
    ]
})





