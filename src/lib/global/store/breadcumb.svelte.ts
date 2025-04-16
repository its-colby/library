import { Webpage, File } from "$directory";

export class BreadcrumbStore {
    private _breadcrumbs: Webpage[] = $state([]);

    get breadcrumbs(): Webpage[] {
        return this._breadcrumbs;
    }

    get is_file(): boolean {
        return this._breadcrumbs.length > 0 && this._breadcrumbs[this._breadcrumbs.length - 1] instanceof File;
    }

    get is_home(): boolean {
        return this._breadcrumbs.length === 0;
    }

    public set(webpages: Webpage[]) {
        this._breadcrumbs = webpages;
    }

    public get_page(): Webpage {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
}

export const store = new BreadcrumbStore();

