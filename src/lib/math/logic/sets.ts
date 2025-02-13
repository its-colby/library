import type { TEX } from "$lib/math/tex/tex_string";
import { LogicalConnective } from "./connectives";

type Condition = TEX;

export type ConditionOrConnective = Condition | LogicalConnective; 

export class MathematicalSet {
    constructor() {}

    public static standard_definition({
        declaration,
        element,
        parent_set, 
        conditions,
    }: {
        declaration: TEX,
        element: string, 
        parent_set?: TEX,
        conditions: ConditionOrConnective[]
    }): TEX {
        const parent = parent_set ? `\\in ${parent_set}` : "";
        const conditions_tex = conditions.map(condition => {
            if (typeof condition === 'string' && Object.values(LogicalConnective).includes(condition as LogicalConnective)) {
                return condition;
            }
            return `\\ ${condition} \\ `;
        }).join(" ");
        return `${declaration} = \\{ ${element} ${parent} \\mid ${conditions_tex} \\}` as TEX;
    }
}