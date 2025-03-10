export type JSONOptional<T> = 
    | { exists: true; value: T }
    | { exists: false };


export class Optional<T>{

    private constructor(
        private readonly _state:
            | { exists: true; value: T }
            | { exists: false }
    ) {}

    static set<T>(value: T): Optional<T> {
        return new Optional<T>({ exists: true, value });
    }

    static none<T>(): Optional<T> {
        return new Optional<T>({ exists: false });
    }

    to_JSON(): JSONOptional<T> {
        return this._state;
    }

    static from_JSON<T>(value: JSONOptional<T>): Optional<T> {
        if (value.exists) {
            return new Optional<T>({ exists: true, value: value.value });
        } else {
            return new Optional<T>({ exists: false });
        }
    }

    static deserialize<T>(value: T | null | JSONOptional<T>): Optional<T> {
        if (value === null) {
            return Optional.none();
        } else if (typeof value === 'object' && 'exists' in value) {
            return Optional.from_JSON(value as JSONOptional<T>);
        } else {
            return Optional.set(value as T);
        }
    }

    is_none(): boolean {
        return !this._state.exists;
    }

    is_set(): this is { value: T } {
        return this._state.exists;
    }

    get value(): T {
        if (!this._state.exists) {
            throw new Error('Cannot get value of a none optional');
        }
        return this._state.value;
    }

    value_or_null(): T | null {
        return this._state.exists ? this._state.value : null;
    }
}