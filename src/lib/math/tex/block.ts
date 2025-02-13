import type { TEX } from "./tex_string";

export class Block {
    private _title?: string;
    private _number?: string;
    private _expressions: TEX[];
    
    constructor({
        title, 
        number,
        expressions
    }: {
        title?: string, 
        number?: string,
        expressions: TEX[]
    }) {
        this._title = title;
        this._number = number;
        this._expressions = expressions;
    }

    public get has_title(): boolean {
        return this._title !== undefined;
    }

    public get title(): TEX {
        return (this._title ? `\\text{${this._title}}` : "") as TEX;
    }

    public get has_number(): boolean {
        return this._number !== undefined;
    }

    public get number(): TEX {
        return (this._number ? `${this._number}` : "") as TEX;
    }

    public get expressions(): TEX[] {
        return this._expressions;
    }
}