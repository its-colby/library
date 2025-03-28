import { Prose } from "./prose";
import { List } from "./list";
import { Digression } from "./digression";
import { Statement } from "./equation";

export type ExpositionComponent = (Prose | Statement | Digression | List);

export * from "./equation";
export * from "./prose";
export * from "./digression";
export * from "./list";
