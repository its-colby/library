import { Optional } from "$common";

import { Webpage, type WebpageParams } from "./webpage";
import { File } from "./file";

type FolderContent = 
    | { files: File[]; folders?: Folder[], root?: boolean }
    | { folders: Folder[]; files?: File[], root?: boolean };

type Params = WebpageParams & FolderContent;

const ROOT = "__root__";

export class Folder extends Webpage {
    public readonly files: File[];
    public readonly folders: Folder[];
    
    constructor(params: Params) {
        if (params.root) {
            params.title = ROOT;
            params.slug = "";
        }
        super(params);
        this.files = params.files ?? [];
        this.folders = params.folders ?? [];
    }

    public get published_files(): File[] {
        return this.published ? this.files.filter(file => file.published) : [];
    }

    public get published_folders(): Folder[] {
        return this.published ? this.folders.filter(folder => folder.published) : [];
    }

    public find(url: string): Optional<Webpage> {
        if (!this.published) return Optional.none();
        
        if (this.title !== ROOT && this.url === url) return Optional.set(this);
        
        const file = this.published_files.find(file => file.url === url);
        if (file) return Optional.set(file);
        
        for (const folder of this.published_folders) {
            const result = folder.find(url);
            if (result.is_set()) return result;
        }
        return Optional.none();
    }

    public published_urls(): string[] {
        const urls: string[] = [];
        
        if (this.published && this.title !== ROOT) {
            urls.push(this.url);
        }
        
        return urls
            .concat(this.published_folders.flatMap(folder => folder.published_urls()))
            .concat(this.published_files.map(file => file.url));
    }
}
