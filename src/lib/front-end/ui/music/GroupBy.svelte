<script lang="ts">
    import { GroupByStatement } from "$lib/content/music";
    import { group_by_statements } from "./utils.svelte";
    import Dropdown from "$lib/front-end/ui/utils/Dropdown.svelte";

    function change_group_by_statement(level: keyof typeof group_by_statements, new_statement: GroupByStatement) {
        group_by_statements[level] = new_statement;
        if (level === "primary" && new_statement === group_by_statements.secondary) {
            group_by_statements.secondary = Object.values(GroupByStatement).find(s => s !== new_statement) as GroupByStatement;
        }
    }

    function get_group_by_statements(level: keyof typeof group_by_statements): GroupByStatement[] {
        const statements = Object.values(GroupByStatement).filter(statement => statement !== group_by_statements[level] && statement !== group_by_statements["primary"]);
        return statements;
    }
</script>

<nav>
    <span class="group-by-label">Group By:</span>
    {@render group_by_button("primary")}
    <span class="group-by-button-separator">{'>'}</span>
    {@render group_by_button("secondary")}
</nav>

{#snippet group_by_button(level: keyof typeof group_by_statements)}
    <Dropdown 
        header={chosen_group_by} 
        header_data={group_by_statements[level]}
        row={group_by_option} 
        items={get_group_by_statements(level)} 
        on_click={(statement) => change_group_by_statement(level, statement)}
    />
{/snippet}

{#snippet chosen_group_by(group_by_statement: GroupByStatement)}
    <span class="chosen-group-by">{group_by_statement}</span>
{/snippet}

{#snippet group_by_option(item: string)}
    <span class="group-by-option">{item}</span>
{/snippet}

<style lang="scss">
    @use "$lib/front-end/theme/fonts";

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-neutral);
        justify-content: center;
    }

    span.group-by-label, span.chosen-group-by, span.group-by-option {
        @include fonts.themed-font('100', 'normal');
        color: var(--text-neutral);
    }

    span.chosen-group-by, span.group-by-option {
        cursor: pointer;
    }

    span.chosen-group-by {
        text-decoration: underline;
    }

    span.chosen-group-by:hover, span.group-by-option:hover {
        color: var(--text-contrast);
    }

</style>