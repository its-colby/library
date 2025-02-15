import { Block } from "$lib/math/tex/block";
import { Tex } from "$lib/math/tex/notation";
import { Inline } from "$lib/math/tex/inline";


export class Content {
    public values: (Inline | Block)[];

    constructor(values: (Inline | Block)[]) {
        this.values = values;
    }

    public assign_block_indices({
        prefixed_index
    }: {
        prefixed_index: Tex
    }) {
        let block_index = 0;
        this.values.forEach((item) => {
            if (item instanceof Block) {
                item.set_index(block_index);
                item.set_prefixed_index(prefixed_index);
                block_index++;
            } 
        });
    }
}