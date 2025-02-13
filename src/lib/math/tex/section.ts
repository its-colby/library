const sections = {
    PREFACE: 'Preface',
    INTRODUCTION: 'Introduction',
} as const;

export class SectionTitle {
    text: string;
    number: string;

    constructor({ 
        text, 
        number 
    }: { 
        text: string, 
        number: string 
    }) {
        this.text = text;
        this.number = number;
    }

    static preface({ number }: { number: string }) {
        return new SectionTitle({
            text: sections.PREFACE,
            number
        });
    }

    static introduction({ number }: { number: string }) {
        return new SectionTitle({
            text: sections.INTRODUCTION,
            number
        });
    }
}
