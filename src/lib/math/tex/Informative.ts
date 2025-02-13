import { Paragraph } from "./Paragraph";
import { Block } from "./block";
import type { TEX } from "./tex_string";

type ParagraphOrBlock = Paragraph | Block;

type BlockWithoutNumber = {
    title: string;
    expressions: TEX[];
}

type ParagraphOrBlockWithoutNumber = Paragraph | BlockWithoutNumber;

type WithType ={
    item: Block;
    type: 'block';
} | {
    item: Paragraph;
    type: 'paragraph';
}

export class Informative {
    public content: ParagraphOrBlock[];

    constructor({ content }: { content: ParagraphOrBlock[] }) {
        this.content = content;
    }

    static add_numbers({
        parent_number,
        content
    }: {
        parent_number: TEX;
        content: ParagraphOrBlockWithoutNumber[]
    }) {
        let block_count = 0;
        return new Informative({
            content: content.map((item) => {
                if ('title' in item && 'expressions' in item) {
                    const block = new Block({
                        title: item.title,
                        number: `${parent_number}.${block_count + 1}`,
                        expressions: item.expressions,
                    });
                    block_count++;
                    return block;
                } else {
                    return item;
                }
            })
        });
    }

    public add_type(): Array<WithType> {
        return this.content.map((item) => {
            if ('title' in item && 'expressions' in item) {
                return { item, type: "block" };
            } else {
                return { item, type: "paragraph" };
            }
        });
    }
}