import { GroupByStatement } from "$lib/content/music";

export interface Statements {
    primary: GroupByStatement;
    secondary: GroupByStatement;
}

export const group_by_statements: Statements = $state({
    primary: GroupByStatement.GENRE,
    secondary: GroupByStatement.TIER,
});