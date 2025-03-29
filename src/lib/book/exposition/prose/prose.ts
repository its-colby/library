import { Tex } from "./tex";

type TextOrTex = string | Tex;

export class Prose {
    public readonly segments: TextOrTex[];

    constructor(segments: TextOrTex[]) {
        this.segments = segments;
    }

    public to_string(): string {
        return this.segments.map((v) => v instanceof Tex ? "" : v).join("");
    }

    public static parse(input: string): Prose {
        const segments: TextOrTex[] = [];
        const parts = input.split('$$');
        
        // Check for valid pairing of $$ delimiters
        if (parts.length % 2 === 0) {
            throw new Error('Unmatched $$ delimiter found');
        }
        
        parts.forEach((part, index) => {
            // Even indices are regular text, odd indices are Tex
            if (index % 2 === 0) {
                segments.push(part); // Keep empty strings for proper spacing
            } else {
                segments.push(new Tex(part));
                // Add empty string between consecutive Tex elements
                if (index < parts.length - 2) {
                    segments.push("");
                }
            }
        });
        
        return new Prose(segments);
    }
}