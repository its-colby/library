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
        this.prefix_url(this.url);
    }

    private prefix_url(url: string): void {
        this.files.forEach(file => file.prepend_to_url(url));
        this.folders.forEach(folder => folder.prepend_to_url(url));
        this.folders.forEach(folder => folder.prefix_url(url));
    }

    public get published_files(): File[] {
        return this.published ? this.files.filter(file => file.published) : [];
    }

    public get published_folders(): Folder[] {
        return this.published ? this.folders.filter(folder => folder.published) : [];
    }

    public find(url: string): Webpage[] {
        if (!url.startsWith('/')) {
            url = '/' + url;
        }
        
        if (!this.published) return [];
        
        // If this folder matches the URL, return just this folder
        if (this.title !== ROOT && this.url === url) {
            return [this];
        }
        
        // Check if any file matches the URL
        const matchingFile = this.published_files.find(file => file.url === url);
        if (matchingFile) {
            return this.title === ROOT ? [matchingFile] : [this, matchingFile];
        }
        
        // Check each subfolder
        for (const folder of this.published_folders) {
            const result = folder.find(url);
            if (result.length > 0) {
                // If this is the root folder, don't include it in the path
                return this.title === ROOT ? result : [this, ...result];
            }
        }
        
        return [];
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
