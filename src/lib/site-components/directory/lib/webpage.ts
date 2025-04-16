export interface WebpageParams {
    title: string;
    slug?: string;
    published?: boolean;
}

export class Webpage {
    public readonly slug: string;
    private _url: string;
    public readonly published: boolean;
    public readonly title: string;

    constructor(params: WebpageParams) {
        this.title = params.title;
        this.slug = params.slug ?? this.slug_from(params.title);
        this._url = this.slug;
        this.published = params.published ?? true;
    }

    public get url(): string {
        return this._url;
    }

    public prepend_to_url(prefix: string): void {
        this._url = prefix + "/" + this._url;
    }

    private slug_from(title: string): string {
        return title.toLowerCase().replace(/ /g, "-");
    }
}