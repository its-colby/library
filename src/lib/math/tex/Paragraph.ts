import type { TEX } from "./tex_string";

type TextOrTex = string | {t: TEX};

type WithType = {
    item: string;
    type: 'text';
} | {
    item: TEX;
    type: 'tex';
}

export class Paragraph {
    public content: TextOrTex[];

    constructor({ content }: { content: TextOrTex[] }) {
        this.content = content;
    }

    public add_type(): WithType[] {
        return this.content.map((item) => {
            if (typeof item === "object" && "t" in item) {
                return { item: item.t, type: 'tex' };
            } else {
                return { item: item as string, type: 'text' };
            }
        });
    }
    
}