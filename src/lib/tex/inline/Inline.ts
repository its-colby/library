import { Tex } from "$lib/tex/notation";

type TextOrTex = string | Tex;

export class Inline {
    public readonly value: TextOrTex[];

    constructor(value: TextOrTex[]) {
        this.value = value;
    }

    public to_string(): string {
        return this.value.map((v) => v instanceof Tex ? "" : v).join("");
    }

    public static parse(input: string): Inline {
        const parts: TextOrTex[] = [];
        const segments = input.split('$$');
        
        // Check for valid pairing of $$ delimiters
        if (segments.length % 2 === 0) {
            throw new Error('Unmatched $$ delimiter found');
        }
        
        segments.forEach((segment, index) => {
            // Even indices are regular text, odd indices are Tex
            if (index % 2 === 0) {
                parts.push(segment); // Keep empty strings for proper spacing
            } else {
                parts.push(new Tex(segment));
                // Add empty string between consecutive Tex elements
                if (index < segments.length - 2) {
                    parts.push("");
                }
            }
        });
        
        return new Inline(parts);
    }
}