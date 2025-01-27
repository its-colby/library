<script lang="ts">
    import { pieces, type Piece, GroupByStatement, statement_to_field, Tier } from "$lib/music";
    import Dropdown from "$lib/utils/Dropdown.svelte";
    import Accordion from "$lib/utils/Accordion.svelte";

    // TODO: add accordion, add title, add tier meanings, clean up

    interface Statements {
        primary: GroupByStatement;
        secondary: GroupByStatement;
    }
    
    const group_by_statements: Statements = {
        primary: GroupByStatement.GENRE,
        secondary: GroupByStatement.TIER,
    }

    function change_group_by_statement(level: "primary" | "secondary", new_statement: GroupByStatement) {
        group_by_statements[level] = new_statement;
        if (level === "primary" && new_statement === group_by_statements.secondary) {
            group_by_statements.secondary = Object.values(GroupByStatement).find(s => s !== new_statement) as GroupByStatement;
        }
    }

    function group_by(items: Piece[], level: "primary" | "secondary"): [string, Piece[]][] {
        const field_name = statement_to_field(group_by_statements[level]);
        const groups = new Map<string, Piece[]>();

        // First pass: create the groups
        for (const item of items) {
            const group_name = item[field_name];
            groups.set(group_name, [...(groups.get(group_name) ?? []), item]);
        }

        // Sort items within each group if this is secondary grouping
        if (level === "secondary") {
            for (const [_, group_items] of groups) {
                // Calculate frequencies within this group
                const composerFrequency = new Map<string, number>();
                const genreFrequency = new Map<string, number>();
                
                for (const item of group_items) {
                    composerFrequency.set(item.composer, (composerFrequency.get(item.composer) ?? 0) + 1);
                    genreFrequency.set(item.genre, (genreFrequency.get(item.genre) ?? 0) + 1);
                }

                group_items.sort((a, b) => {
                    // Sort by tier if that's not the grouping field
                    if (group_by_statements["primary"] !== GroupByStatement.TIER && group_by_statements["secondary"] !== GroupByStatement.TIER) {
                        const tierOrder = [Tier.AMAZING, Tier.PARTIALLY_AMAZING, Tier.NOTABLE, Tier.DEFICIENT];
                        if (a.tier !== b.tier) {
                            return tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier);
                        }
                    }
                    // Sort by composer frequency if that's not the grouping field
                    else if (group_by_statements["primary"] !== GroupByStatement.COMPOSER && group_by_statements["secondary"] !== GroupByStatement.COMPOSER) {
                        const freqA = composerFrequency.get(a.composer) ?? 0;
                        const freqB = composerFrequency.get(b.composer) ?? 0;
                        return freqB - freqA || a.composer.localeCompare(b.composer);
                    }
                    // Sort by genre frequency if that's not the grouping field
                    else if (group_by_statements["primary"] !== GroupByStatement.GENRE && group_by_statements["secondary"] !== GroupByStatement.GENRE) {
                        const freqA = genreFrequency.get(a.genre) ?? 0;
                        const freqB = genreFrequency.get(b.genre) ?? 0;
                        return freqB - freqA || a.genre.localeCompare(b.genre);
                    }
                    return 0;
                });
            }
        }

        // Convert to array and sort the groups
        let entries = Array.from(groups.entries());
        entries.sort((a, b) => {
            const [nameA, itemsA] = a;
            const [nameB, itemsB] = b;

            // Special sorting for tiers
            if (field_name === "tier") {
                const tierOrder = [Tier.AMAZING, Tier.PARTIALLY_AMAZING, Tier.NOTABLE, Tier.DEFICIENT];
                return tierOrder.indexOf(nameA as Tier) - tierOrder.indexOf(nameB as Tier);
            }

            // For other fields, sort by weighted tier count (descending)
            const weightA = itemsA.reduce((sum, item) => {
                switch (item.tier) {
                    case Tier.AMAZING: return sum + 3;
                    case Tier.PARTIALLY_AMAZING: return sum + 2;
                    case Tier.NOTABLE: return sum + 1;
                    default: return sum;
                }
            }, 0);
            
            const weightB = itemsB.reduce((sum, item) => {
                switch (item.tier) {
                    case Tier.AMAZING: return sum + 3;
                    case Tier.PARTIALLY_AMAZING: return sum + 2;
                    case Tier.NOTABLE: return sum + 1;
                    default: return sum;
                }
            }, 0);

            if (weightA !== weightB) {
                return weightB - weightA;
            }

            // If tied weights, sort alphabetically
            return nameA.localeCompare(nameB);
        });

        return entries;
    }

    function should_show_field(field: keyof Piece) {
        return field !== statement_to_field(group_by_statements.primary) && field !== statement_to_field(group_by_statements.secondary);
    }

    function get_group_by_statements(level: "primary" | "secondary"): GroupByStatement[] {
        const statements = Object.values(GroupByStatement).filter(statement => statement !== group_by_statements[level] && statement !== group_by_statements["primary"]);
        return statements;
    }

    const legend = {
        [Tier.AMAZING]: "Is amazing",
        [Tier.PARTIALLY_AMAZING]: "Has amazing moments",
        [Tier.NOTABLE]: "Is worth listening to",
        [Tier.DEFICIENT]: "Has significant issues"
    };
</script>


{#snippet tier_legend(tier: Tier, explanation: string)}
    <div class="tier-legend">
        <span class="tier-legend-label">{tier}:</span>
        <span class="tier-legend-item">{explanation}</span>
    </div>
{/snippet}

<main>

    <h1>Curated Classical Music</h1>

    <div class="legend">
        {#each Object.entries(legend) as [tier, explanation]}
            {@render tier_legend(tier as Tier, explanation)}
        {/each}
    </div>

    <div class="group-by-buttons">
        <span class="group-by-label">Group By:</span>
        {@render group_by_button("primary")}
        <span class="group-by-button-separator">---</span>
        {@render group_by_button("secondary")}
    </div>
    
    <div class="sections">
        {#each group_by(pieces, "primary") as [group_name, items]}
            
        <section>
            <h2>{group_name}</h2>
            
            {#each group_by(items, "secondary") as [group_name, secondary_items]}
                {@render secondary_group(group_name, secondary_items)}
            {/each}

        </section>
        
        {/each}
    </div>
</main>


{#snippet group_by_button(level: keyof typeof group_by_statements)}
    <Dropdown 
        header={level === "primary" ? primary_group_by_statement_header : secondary_group_by_statement_header} 
        row={group_by_statement_row} 
        items={get_group_by_statements(level)} 
        on_click={(statement) => change_group_by_statement(level, statement)}
    />
{/snippet}

{#snippet primary_group_by_statement_header()}
    <span class="group-by-button-header">{group_by_statements.primary}</span>
{/snippet}

{#snippet secondary_group_by_statement_header()}
    <span class="group-by-button-header">{group_by_statements.secondary}</span>
{/snippet}

{#snippet group_by_statement_row(item: string)}
    <span class="group-by-statement-row">{item}</span>
{/snippet}

{#snippet secondary_group(group_name: string, items: Piece[])}
    <section class="group-section"> 
        <h3>{group_name}</h3>
        <ul>
            {#each items as item}
                <li>
                    <a href={item.performance_link}>{item.title}</a>
                    {#if should_show_field("tier")}
                        <span class="rating">{item.tier}</span>
                    {:else if should_show_field("composer")}
                        <span class="composer">{item.composer}</span>
                    {/if}
                </li>
            {/each}
        </ul>
    </section> 
{/snippet}

<style>
    div.sections {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 100px;
    }

    div.group-by-buttons {
        display: flex;
        flex-direction: row;
        gap: 10px;
        color: var(--text-neutral-color);
        align-items: center;
        margin-bottom: 30px;
    }

    span.group-by-button-header {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
        cursor: pointer;
    }

    span.group-by-button-header:hover {
        text-decoration: underline;
    }

    span.group-by-statement-row {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
        cursor: pointer;
    }

    span.group-by-statement-row:hover {
        text-decoration: underline;
    }

    span.group-by-label {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
    }

    section.group-section {
        margin-left: 20px;
    }

    main {
        padding-top: 40px;
        padding-left: 250px;
        padding-right: 250px;
    }

    h1 {
        font-size: 36px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    h2 {
        font-size: 24px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    h3 {
        font-size: 20px;
        font-weight: 400;
        color: var(--text-neutral-color);
        margin: 0px;
        margin-top: 20px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0px;
        padding-top: 10px;
        padding-bottom: 20px;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: center;

        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    span.composer {
        width: 150px;
    }

    a {
        width: 200px;
        text-decoration: none;
        color: var(--text-brand-color1);
    }

    a:hover {
        text-decoration: underline;
    }

    div.legend {
        margin: 20px 0;
    }

    div.tier-legend {
        display: flex;
        gap: 10px;
        margin: 5px 0;
    }

    span.tier-legend-label {
        font-weight: 500;
        min-width: 120px;
        color: var(--text-neutral-color);
    }

    span.tier-legend-item {
        color: var(--text-neutral-color);
    }
</style>
