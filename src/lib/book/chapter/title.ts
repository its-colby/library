import { Optional } from "$lib/common";
import { Prose } from "$lib/book/exposition";
import { Ordinal } from "$lib/book/utils";



export abstract class Title {
    public readonly prose: Prose;

    constructor(prose: Prose | string) {
        if (typeof prose === "string") {
            this.prose = new Prose([prose]);
        } else {
            this.prose = prose;
        }
    }

    public abstract get unique_identifier(): string;
}



export class DocumentTitle extends Title {
    constructor(prose: Prose | string) {
        super(prose);
    }

    public get unique_identifier(): string {
        return this.prose.to_string();
    }
}



export class ChapterTitle extends Title {
    private _ordinal: Optional<Ordinal> = Optional.none();

    constructor(prose: Prose | string) {
        super(prose);
    }

    public get ordinal(): Ordinal {
        return this._ordinal.value;
    }

    public set_ordinal(ordinal: Ordinal): void {
        this._ordinal = Optional.set(ordinal);
    }

    public get unique_identifier(): string {
        return this._ordinal.value.value.replace(/\./g, '-');
    }
}