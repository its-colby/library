import { GroupByStatement } from "$music-compilation";

export interface Statements {
    primary: GroupByStatement;
    secondary: GroupByStatement;
}

export const group_by_statements: Statements = $state({
    primary: GroupByStatement.GENRE,
    secondary: GroupByStatement.TIER,
});