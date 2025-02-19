import { Page } from "$lib/articles/utils";
import { Tex } from "$lib/math";

export const metadata = new Page({
    title: "Algebraic Number Theory",
    url: "/mathematics/algebraic-number-theory",
});

import { PREFACE } from "./preface";
PREFACE.title.set_label(new Tex("1"));
PREFACE.content.assign_block_indices({ prefixed_index: new Tex("1") });

export * from "./preface";

import { THE_SET_OF_ALGEBRAIC_NUMBERS } from "./the_set_of_algebraic_numbers";
THE_SET_OF_ALGEBRAIC_NUMBERS.title.set_label(new Tex("2"));
THE_SET_OF_ALGEBRAIC_NUMBERS.content.assign_block_indices({ prefixed_index: new Tex("2") });

export * from "./the_set_of_algebraic_numbers";