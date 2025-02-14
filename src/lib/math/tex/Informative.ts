import { Paragraph } from "./Paragraph";
import { Block } from "./Block";
import type { TEX } from "./tex_string";

export class Informative {
    public content: (Paragraph | Block)[];

    constructor({ content }: { content: (Paragraph | Block)[] }) {
        this.content = content;
    }

    add_numbers({ parent_number }: { parent_number: TEX }) {
        let block_count = 0;
        this.content = this.content.map((item) => {
            if (item instanceof Block && !item.has_number) {
                block_count++;
                item.add_header_number(`${parent_number}.${block_count}` as TEX);
            } 
            return item;
        });
    }
}