import { Optional } from "$lib/common";
import { BookChapter } from "$lib/book";
import { Folder } from "./folder";

export function retrieve_chapter(
    folders: readonly Folder[], 
    target_path: string
): Optional<BookChapter> {
    
    for (const folder of folders) {
        for (const page of folder.published_pages) {
            if (page.url === target_path && page.published && page.chapter) {
                return Optional.set(page.chapter);
            }
        }
    }
    
    return Optional.none();
}