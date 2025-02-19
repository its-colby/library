import { Tex } from "$lib/tex/notation";


export abstract class Statement {

    public abstract set_index({
        index, 
        prefixed_index
    }: {
        index?: number, 
        prefixed_index?: Tex
    }): void;
}