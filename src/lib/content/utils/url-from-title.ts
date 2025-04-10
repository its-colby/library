export function url_from(title: string): string {
    return "/" + title.toLowerCase().replace(/ /g, "-");

}