<script lang="ts">
    import { pieces, GroupByStatement, statement_to_field, Tier, type Piece, type GoodPiece, type BadPiece } from "$lib/data/music/export";
    import Dropdown from "$lib/utils/Dropdown.svelte";
    import Accordion from "$lib/utils/Accordion.svelte";
    import Tooltip from "$lib/utils/Tooltip.svelte";

    // TODO: add accordion, add title, add tier meanings, clean up
    // I define 'romantic music' as instrumental music that consistently manipulates the creation and resolve of musical tension in order to create a broader narrative structure—rising action, climax, and resolution. 

    interface Statements {
        primary: GroupByStatement;
        secondary: GroupByStatement;
    }
    
    const group_by_statements: Statements = {
        primary: GroupByStatement.GENRE,
        secondary: GroupByStatement.TIER,
    }

    function change_group_by_statement(level: keyof typeof group_by_statements, new_statement: GroupByStatement) {
        group_by_statements[level] = new_statement;
        if (level === "primary" && new_statement === group_by_statements.secondary) {
            group_by_statements.secondary = Object.values(GroupByStatement).find(s => s !== new_statement) as GroupByStatement;
        }
    }

    function group_by(items: Piece[], level: keyof typeof group_by_statements): [string, Piece[]][] {
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

    function get_group_by_statements(level: keyof typeof group_by_statements): GroupByStatement[] {
        const statements = Object.values(GroupByStatement).filter(statement => statement !== group_by_statements[level] && statement !== group_by_statements["primary"]);
        return statements;
    }

    const legend = {
        [Tier.AMAZING]: "Emotionally captivating from start to end.",
        [Tier.PARTIALLY_AMAZING]: "Emotionally captivating for 1 or more movements.",
        [Tier.NOTABLE]: "1 or more memorable themes.",
        [Tier.DEFICIENT]: "No memorable themes or emotional captivation."
    };
</script>

{#snippet group_by_buttons()}
    <nav id="group-by-buttons-container">
        <span class="group-by-label">Group By:</span>
        {@render group_by_button("primary")}
        <span class="group-by-button-separator">{'>'}</span>
        {@render group_by_button("secondary")}
    </nav>
{/snippet}

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

{#snippet primary_sections()}
    <div id="primary-sections-container">
        {#each group_by(pieces, "primary") as [group_name, items]}
            {@render primary_section(group_name, items)}
        {/each}
    </div>
{/snippet}

{#snippet primary_section(group_name: string, items: Piece[])}
    <section class="primary-section">
        <h2 class="primary-section-header">{group_name}</h2>
        
        {#each group_by(items, "secondary") as [group_name, secondary_items]}
            {@render secondary_section(group_name, secondary_items)}
        {/each}

    </section>
{/snippet}

{#snippet secondary_section(group_name: string, items: Piece[])}
    <section class="secondary-section"> 
        {#if group_name === Tier.DEFICIENT || group_name === Tier.NOTABLE}
            <Accordion 
                --chevron-color="var(--text-neutral-color)"
                --chevron-color-hovered="var(--text-contrast-color)"
                header={secondary_section_header}
                header_data={group_name}
                details={secondary_section_details} 
                details_data={items}
            />
        {:else}
            {@render secondary_section_header(false, group_name)}
            {@render secondary_section_details(items)}
        {/if}
    </section> 
{/snippet}

{#snippet secondary_section_header(open: boolean, group_name: string)}
    <h3 class="secondary-section-header {open ? 'open' : ''}">{group_name}</h3>
{/snippet}

{#snippet piece_title(data: {link: string, title: string})}
<a class="piece-title" target="_blank" rel="noopener noreferrer" href={data.link}>{data.title}</a>
{/snippet}

{#snippet secondary_section_details(items: Piece[])}
    <ul class="secondary-section-details-container">
        {#each items as item}
            <li class="piece-details">
                {#if item.tier !== Tier.DEFICIENT}
                    <span class="piece-title-container">
                        <Tooltip
                            text={`Click to see performance${item.performer ? ` by ${item.performer}` : item.conductor ? ` conducted by ${item.conductor}` : ''}`}
                            data={{link: item.link, title: item.title}}
                            content={piece_title}
                            position="above"
                        />
                    </span>
                {:else}
                    <span class="deficient-piece-title">{item.title}</span>
                {/if}
                {#if should_show_field("tier")}
                    <span class="tier">{item.tier}</span>
                {:else if should_show_field("composer")}
                    <span class="composer">{item.composer}</span>
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

{#snippet preface()}
    <aside id="preface-container">
        <p>
            This page presents a collection of instrumental music that can be organized by composer, genre, or my own judgement of its quality as a romantic piece.
        </p>
        <p>
            This page is intended for those who enjoy romantic music and want to discover new pieces or better performances. If you're not an avid listener, this page is not for you. In order to enjoy romantic music, your mind must be trained to automatically recognize the creation and resolution of musical tension.
        </p>
        <p>
            Please read the explanations below to understand the different tiers of judgement that I applied to each piece.
        </p>
        {#each Object.entries(legend) as [tier, definition]}

            <p class="tier-definition-container">
                <span class="tier-label">{tier}</span>
                <span class="tier-label-separator">—</span>
                <span class="tier-definition">{definition}</span>
            </p>

        {/each}
    </aside>
{/snippet}

<main>

    <h1 id="title">Curated Romantic Music</h1>
    {@render preface()}
    {@render group_by_buttons()}
    {@render primary_sections()}
    
</main>

<style>
    main {
        padding-top: 40px;
        padding-left: 250px;
        padding-right: 250px;
    }

    div#primary-sections-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 100px;
        margin-top: 30px;
    }

    nav#group-by-buttons-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-bottom: 30px;
        color: var(--text-neutral-color);
        justify-content: flex-end;
    }

    section.secondary-section {
        padding-top: 15px;
        padding-bottom: 15px;
        margin-left: 20px;
    }

    ul.secondary-section-details-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0px;
        padding-top: 10px;
    }

    li.piece-details {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;

        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    span.group-by-label, span.chosen-group-by, span.group-by-option, aside#preface-container {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
    }

    span.chosen-group-by, span.group-by-option {
        cursor: pointer;
    }

    span.chosen-group-by {
        text-decoration: underline;
    }

    span.chosen-group-by:hover, span.group-by-option:hover {
        color: var(--text-contrast-color);
    }

    span.composer {
        width: 150px;
    }

    span.piece-title-container {
        width: 200px;
    }

    a.piece-title {
        text-decoration: none;
        color: var(--text-brand-color1);
    }

    li.piece-details > span.deficient-piece-title {
        color: var(--text-neutral-color);
        width: 200px;
    }

    a.piece-title:hover {
        text-decoration: underline;
    }

    h1#title, h2.primary-section-header, h3.secondary-section-header {
        color: var(--text-neutral-color);
        margin: 0px;
    }

    h3.secondary-section-header.open {
        color: var(--text-contrast-color);
    }

    h1#title {
        font-size: 36px;
        font-weight: 600;
    }

    h2.primary-section-header {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    h3.secondary-section-header {
        font-size: 20px;
        font-weight: 400;
    }

    p {
        margin: 0px;
        margin-bottom: 5px;
    }

    aside#preface-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 20px;
        padding-bottom: 70px;
    }

    span.tier-label {
        color: var(--text-brand-color1);
    }

    span.tier-label-separator {
        padding-left: 5px;
        padding-right: 5px;
    }
</style>
