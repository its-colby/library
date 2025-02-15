import { type TEX } from "./tex_string";

export namespace Notation {
    
    export const AND = " \\land ";
    export const OR = " \\lor ";
    export const NOT = " \\neg ";
    export const IMPLIES = " \\implies ";
    export const IFF = " \\iff ";
    export const EQUALS = " = ";
    export const COMMA = " , ";

    export const ALL = " \\forall ";
    export const SOME = " \\exists ";

    export const INFINITY = " \\infty ";
    
    export const IN = " \\in ";
    export const NOT_IN = " \\notin ";
    export const SUBSET = " \\subset ";
    export const NOT_SUBSET = " \\not\\subset ";
    export const SUBGROUP = " \\leq ";
    export const NOT_SUBGROUP = " \\not\\leq ";

    export const SUCH_THAT = " \\mid ";
    export const INTERSECT = " \\cap ";
    export const UNION = " \\cup ";
    
    export const MULTIPLY = " \\cdot ";
    export const ELLIPSES = " \\cdots ";


    export enum Space {
        SINGLE = " \\  ",
        DOUBLE = " \\enspace ",
        TRIPLE = " \\quad ",
        QUADRUPLE = " \\qquad ",
    }

    export enum BB {
        A = " \\mathbb{A} ",
        B = " \\mathbb{B} ",
        C = " \\mathbb{C} ",
        D = " \\mathbb{D} ",
        E = " \\mathbb{E} ",
        F = " \\mathbb{F} ",
        G = " \\mathbb{G} ",
        K = " \\mathbb{K} ",
        M = " \\mathbb{M} ",
        Q = " \\mathbb{Q} ",
        R = " \\mathbb{R} ",
        Z = " \\mathbb{Z} ",
    }

    export enum CAL {
        A = " \\mathcal{A} ",
        C = " \\mathcal{C} ",
        O = " \\mathcal{O} ",
        I = " \\mathcal{I} ",
        R = " \\mathcal{R} ",
        N = " \\mathcal{N} ",
    }

    export function sub(tex: string): TEX {
        return `_{${tex}}` as TEX;
    }

    export function exp(tex: string): TEX {
        return `^{${tex}}` as TEX;
    }

    export function bb({
        letter, 
        sub, 
        exp,
    }: {
        letter: string, 
        sub?: string, 
        exp?: string
    }): TEX {
        const sub_tex = sub ? Notation.sub(sub as TEX) : "";
        const exp_tex = exp ? Notation.exp(exp as TEX) : "";
        return `\\mathbb{${letter}${sub_tex}${exp_tex}}` as TEX;
    }

    export function cal({
        letter,
        sub,
        exp,
    }: {
        letter: string,
        sub?: string,
        exp?: string,
    }): TEX {
        const sub_tex = sub ? Notation.sub(sub as TEX) : "";
        const exp_tex = exp ? Notation.exp(exp as TEX) : "";
        return `\\mathcal{${letter}${sub_tex}${exp_tex}}` as TEX;
    }

    export function multiply(a: string, b: string): TEX {
        return `${a} ${MULTIPLY} ${b}` as TEX;
    }

    export function space_around(tex: string): TEX {
        return `${Space.SINGLE} ${tex} ${Space.SINGLE}` as TEX;
    }

    export function brackets_around(tex: string): TEX {
        return `\\{ ${tex} \\}` as TEX;
    }

    export function equivalent(a: string, b: string): TEX {
        return `${a} ${EQUALS} ${b}` as TEX;
    }

    export function implies(a: string, b: string): TEX {
        return `${a} ${IMPLIES} ${b}` as TEX;
    }

    export function member(a: string, b: string): TEX {
        return `${a} ${IN} ${b}` as TEX;
    }

    export function such_that(a: string, b: string): TEX {
        return `${a} ${SUCH_THAT} ${b}` as TEX;
    }

    export function iff(a: string, b: string): TEX {
        return `${a} ${IFF} ${b}` as TEX;
    }

    export function concat(items: string[]): TEX {
        return items.join("") as TEX;
    }

    export function text(tex: string, spacing: boolean = true): TEX {
        return (spacing ? 
            `\\text{ ${tex} }` : 
            `\\text{${tex}}`
        ) as TEX;
    }

    export function is_a(value: string, spacing: boolean = true): TEX {
        return text(`is a ${value}`, spacing);
    }

    export function forall(a: string, b: string): TEX {
        return `${ALL} ${a} ${IN} ${b}` as TEX;
    }

    export function there_is(a: string, b: string): TEX {
        return `${SOME} ${a} ${IN} ${b}` as TEX;
    }

    export function func_zero(input: string, func: string = "f"): TEX {
        return `${func}(${input}) = 0` as TEX;
    }

    export function space_conditions(conditions: string[]): TEX {
        return conditions.map(condition => {
            if (condition in [AND, OR, NOT, IMPLIES, IFF, COMMA]) {
                return condition;
            }
            return space_around(condition);
        }).join(" ") as TEX;
    }

    export function intersect(a: string, b: string): TEX {
        return `${a} ${INTERSECT} ${b}` as TEX;
    }

    export function set_definition({
        declaration,
        element,
        parent_set, 
        conditions,
    }: {
        declaration: string,
        element: string, 
        parent_set?: string,
        conditions: string[]
    }): TEX {
        const elt = parent_set ? member(element, parent_set) : element;

        return equivalent(
            declaration,
            brackets_around(
                such_that(elt, space_conditions(conditions))
            )
        )
    }
}