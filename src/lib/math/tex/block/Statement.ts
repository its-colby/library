import { Optional } from "$lib/common/optional.type";
import { Expression } from "./Expression";
import { LabelConfig, LabelType, IndexType } from "./label";
import { Tex } from "$lib/math/tex/notation";


export class Statement {

    private static _primary_label_config: LabelConfig = new LabelConfig({
        shorten_label_type: true,
        shorten_index: false,
        add_parens: true,
        index_type: IndexType.NUMBER
    });

    private static _secondary_label_config: LabelConfig = new LabelConfig({
        shorten_label_type: true,
        shorten_index: true,
        add_parens: true,
        index_type: IndexType.LETTER
    });

    public primary: Expression;
    public secondaries: Optional<Expression[]>;

    constructor({
        primary,
        secondaries
    }: {
        primary: Expression,
        secondaries?: Expression[]
    }) {
        this.primary = primary;
        this.primary.set_label_config(Statement._primary_label_config);
        this.secondaries = secondaries ? 
            Optional.set(secondaries.map(secondary => {
                secondary.set_label_config(Statement._secondary_label_config);
                return secondary;
            })) : 
            Optional.none();
        if (this.has_secondaries) {
            this.secondaries.value.forEach((secondary, index) => {
                secondary.set_index(index);
            });
        }
    }

    public get has_secondaries(): boolean {
        return this.secondaries.is_set();
    }

    public set_index(index: number) {
        this.primary.set_index(index);
    }

    public static from_single(value: Tex) {
        return new Statement({
            primary: new Expression({
                value,
                label_type: LabelType.NONE
            })
        });
    }

    public static with_conditions({
        primary,
        conditions
    }: {
        primary: Tex,
        conditions: Tex[]
    }) {
        return new Statement({
            primary: new Expression({
                value: primary,
                label_type: LabelType.NONE
            }),
            secondaries: conditions.map(condition => new Expression({
                value: condition,
                label_type: LabelType.CONDITION
            }))
        });
    }
}