import { Optional } from "$lib/common/optional.type";
import { Tex } from "$lib/tex/notation";
import { Statement, OneLineStatement, InlineWrapper } from "$lib/tex/statement";
import { BlockHeader } from "./BlockHeader";
import { LabelType } from "$lib/tex/label";
import { Inline } from "$lib/tex/inline";

export class Block {

    public readonly header: Optional<BlockHeader>;
    public statements: Statement[];

    constructor({
        title,
        label_type = LabelType.NONE,
        statements
    }: {
        title?: Tex,
        label_type?: LabelType,
        statements: Statement[]
    }) {

        this.header = title ? 
            Optional.set(new BlockHeader({title, label_type})) : 
            Optional.none();

        this.statements = statements;

        if (this.has_header) {
            this.statements.forEach((statement, index) => {
                statement.set_index({
                    index,
                });
            });
        }
    }

    public get has_header(): boolean {
        return this.header.is_set();
    }

    public get num_statements(): number {
        return this.statements.length;
    }

    public set_index({
        index, 
        prefixed_index
    }: {
        index?: number, 
        prefixed_index?: Tex
    }) {
        if (this.has_header) {
            this.header.value.set_index({
                index,
                prefixed_index
            });
        } else {
            this.statements.forEach((statement, offset) => {
                statement.set_index({
                    index: (index ?? 0) + offset,
                    prefixed_index
                });
            });
        }
    }

    public static from_single_statement(value: Tex) {
        return new Block({
            statements: [new OneLineStatement({value})]
        });
    }

    public static from_multiple_statements(values: Tex[]) {
        return new Block({
            statements: values.map(value => new OneLineStatement({value}))
        });
    }

    public static from_definition({
        title,
        statements
    }: {
        title: Tex,
        statements: Statement[]
    }) {
        return new Block({
            title,
            label_type: LabelType.DEFINITION,
            statements
        });
    }

    public static from_proof({
        title,
        statements
    }: {
        title: Tex,
        statements: Statement[]
    }) {
        return new Block({
            title,
            label_type: LabelType.PROOF,
            statements
        });
    }

    public static from_example({
        title,
        statements
    }: {
        title: Tex,
        statements: Statement[]
    }) {
        return new Block({
            title,
            label_type: LabelType.EXAMPLE,
            statements
        });
    }

    public static from_inline(inline: Inline, title?: Tex) {
        return new Block({
            title,
            statements: [new InlineWrapper({inline})]
        });
    }
}