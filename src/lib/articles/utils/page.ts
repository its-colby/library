export class Page {
    public title: string;
    public url: string;
    constructor({
        title,
        url
    }: {
        title: string,
        url: string
    }) {
        this.title = title;
        this.url = url;
    }
}