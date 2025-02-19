import { Optional } from "$lib/common/optional.type";
import { Tex } from "$lib/math/tex/notation";
import { Statement } from "./Statement";
import { BlockHeader } from "./BlockHeader";
import { LabelType } from "./label";


export class Block {

    public readonly header: Optional<BlockHeader>;
    public statements: Statement[];

    constructor({
        title,
        label = LabelType.NONE,
        statements
    }: {
        title?: Tex,
        label?: LabelType,
        statements: Statement[]
    }) {

        this.header = title ? 
            Optional.set(new BlockHeader({title, label_type: label})) : 
            Optional.none();

        this.statements = statements.map((statement, index) => {
            statement.set_index(index);
            return statement;
        });
    }

    public get has_header(): boolean {
        return this.header.is_set();
    }

    public set_prefixed_index(prefixed_index: Tex) {
        if (this.has_header) {
            this.header.value.set_prefixed_index(prefixed_index);
        }
    }

    public set_index(index: number) {
        if (this.has_header) {
            this.header.value.set_label_index(index);
        }
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
            label: LabelType.DEFINITION,
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
            label: LabelType.PROOF,
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
            label: LabelType.EXAMPLE,
            statements
        });
    }
}