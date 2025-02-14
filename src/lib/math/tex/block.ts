import { Optional } from "$lib/common/optional.type";
import { Statement } from "./Statement";
import type { TEX } from "./tex_string";

type Header = {
    title: string;
    number: Optional<string>;
}

type HeaderInput = {
    title: string;
    number?: string;
}

export class Block {
    private _header: Optional<Header>;
    public statements: Statement[];
    
    constructor({
        header,
        statements
    }: {
        header?: HeaderInput,
        statements: Statement[]
    }) {

        this._header = header ? Optional.set({
            title: header.title,
            number: header.number ? Optional.set(header.number) : Optional.none()
        }) : Optional.none();

        this.statements = statements.map((statement, index) => {
            statement.label = Optional.set(`(${index + 1})` as TEX);
            return statement;
        });
    }

    public add_header_number(number: TEX) {
        if (this.has_header) {
            this._header.value.number = Optional.set(number);
        }
    }

    public get has_header(): boolean {
        return this._header.is_set();
    }

    public get title(): TEX {
        return (this._header.is_set() ? `\\text{${this._header.value.title}}` : "") as TEX;
    }

    public get has_number(): boolean {
        return this._header.is_set() && this._header.value.number.is_set();
    }

    public get number(): TEX {
        return (this._header.is_set() && this._header.value.number.is_set() ? `${this._header.value.number.value}` : "") as TEX;
    }
}