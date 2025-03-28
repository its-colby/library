export class Ordinal {
    public readonly value: string;

    constructor({
        prefixed_ordinal,
        zero_based_index
    }: {
        prefixed_ordinal?: Ordinal,
        zero_based_index: number
    }) {
        const index = (zero_based_index + 1).toString()
        this.value = prefixed_ordinal === undefined ?
            index :
            prefixed_ordinal.value + "." + index;
    }

}