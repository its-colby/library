import { Optional } from "$lib/common/optional.type";
import type { TEX } from "./tex_string";

export class Statement {
    public header: TEX;
    public label: Optional<TEX>;
    public children: Optional<TEX[]>;
    public children_labels: boolean;

    constructor({
        header,
        label,
        children,
        children_labels
    }: {
        header: TEX,
        label?: TEX,
        children?: TEX[],
        children_labels?: boolean
    }) {
        this.header = header;
        this.label = label ? 
            Optional.set(label) : 
            Optional.none();
        this.children = children ? 
            Optional.set(children) : 
            Optional.none();
        this.children_labels = children_labels ?? false;
    }

    public get has_children(): boolean {
        return this.children.is_set();
    }

    public get has_label(): boolean {
        return this.label.is_set();
    }
}