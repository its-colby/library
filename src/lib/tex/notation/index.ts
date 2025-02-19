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

    public get is_empty() {
        return this._value.length === 0;
    }

    public static from_text(text: string) {
        return new Tex(`\\text{${text}}`);
    }
}