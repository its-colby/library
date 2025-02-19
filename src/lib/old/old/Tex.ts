import { Notation as N } from "./utils";

export class Tex {

    private _value: string;

    constructor(value: string | Tex) {
        value = Tex.get_string(value);
        this._value = value;
    }

    get value() {
        return this._value;
    }

    public static get_string(x: string | Tex) {
        if (typeof x === 'string') {
            return x;
        } else {
            return x.value;
        }
    }

    public subscript(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.subscript(x)));
    }

    public exp(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.exp(x)));
    }

    public in(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.IN, x));
    }

    public lbrace() {
        return new Tex(N.concat(this._value, " \\{ "));
    }

    public rbrace() {
        return new Tex(N.concat(this._value, " \\} "));
    }

    public equals(x?: string | Tex) {
        x = Tex.get_string(x ?? "");
        return new Tex(N.concat(this._value, N.EQUALS, x));
    }

    public times(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.TIMES, x));
    }

    public such_that(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.MID, x));
    }

    public append(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, x));
    }

    public comma() {
        return new Tex(N.concat(this._value, N.COMMA));
    }

    public space() {
        return new Tex(N.concat(this._value, N.Space.SINGLE));
    }

    public get is_empty() {
        return this._value.length === 0;
    }

    public forall(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.FORALL, x));
    }

    public exists(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.EXISTS, x));
    }

    public rewrite(x: string | Tex) {
        x = Tex.get_string(x);
        this._value = x;
        return this;
    }

    public static parens(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.parens(x));
    }

    public of(x: string | Tex) {
        x = Tex.get_string(x);
        return Tex.parens(x);
    }

    public static brackets(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.brackets(x));
    }

    public static braces(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.braces(x));
    }

    public static from_text(text: string) {
        return new Tex(N.text(text));
    }

    public iff() {
        return new Tex(N.concat(this._value, N.IFF));
    }

    public text(text: string) {
        return new Tex(N.concat(this._value, N.text(text)));
    }

    public divides(x: string | Tex) {
        x = Tex.get_string(x);
        return new Tex(N.concat(this._value, N.DIVIDES, x));
    }

    public static concat(x: (string | Tex)[]) {
        return new Tex(N.concat(...x.map(Tex.get_string)));
    }
}