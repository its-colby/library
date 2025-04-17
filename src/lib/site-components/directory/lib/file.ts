import { Chapter } from "$book";

import { Webpage, type WebpageParams } from "./webpage";

interface Params extends WebpageParams {
    content?: any;
}

export class File extends Webpage {
    public readonly content: any;

    constructor(params: Params) {
        super(params);
        this.content = params.content;
    }

    public static from_chapter(
        chapter: Chapter, published: boolean = true
    ): File {
        return new File({
            title: chapter.title.prose.to_string(),
            content: chapter,
            published
        });
    }
}