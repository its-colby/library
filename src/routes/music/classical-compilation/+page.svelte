<script lang="ts">
    import { pieces, GroupByStatement, statement_to_field, Tier, type Piece } from "$lib/content/music";
    import { group_by_statements } from "$lib/front-end/ui/music/utils.svelte";
    import Accordion from "$lib/front-end/ui/utils/Accordion.svelte";
    import Tooltip from "$lib/front-end/ui/utils/Tooltip.svelte";
    import Preface from "$lib/front-end/ui/music/preface/Preface.svelte"
    import GroupBy from "$lib/front-end/ui/music/GroupBy.svelte";
    import Title from "$lib/front-end/ui/music/Title.svelte";



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
</script>

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
                --chevron-color="var(--text-neutral)"
                --chevron-color-hovered="var(--text-contrast)"
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

<main>
    <div class="top">
        <Title/>
        <Preface />
        <GroupBy/>
    </div>
    {@render primary_sections()}
    
</main>

<style lang="scss">
    @use "$lib/front-end/theme/screens";
    @use "$lib/front-end/theme/fonts";

    .top {
        display: flex;
        flex-direction: column;

        @include screens.desktop {
            margin: 0 auto;
            max-width: 45rem;
        }
    }

    main {
        @include screens.desktop {
            padding-top: 2rem;
            padding-left: 3rem;
            padding-right: 3rem;
        }

        @include screens.mobile {
            padding-left: 1.5rem;
            padding-right: 1rem;
        }
    }

    div#primary-sections-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;

        @include screens.desktop {
            padding-top: 3rem;
        }
        @include screens.mobile {
            padding-top: 1rem;

        }
    }

    section.primary-section {
        display: flex;
        flex-direction: column;
    }

    section.secondary-section {
        padding-top: 1rem;
        padding-bottom: 1rem;

        @include screens.desktop {
            padding-left: 1.2rem;
        }

        @include screens.mobile {
            padding-left: 0;
        }
    }

    ul.secondary-section-details-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 0px;
        padding-top: 0.5rem;
        
        margin: 0;
        padding: 0;

        @include screens.desktop {
            padding-left: 1.2rem;
        }
    }

    li.piece-details {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;

        @include fonts.themed-font('100', 'normal');
        color: var(--text-neutral);
        margin: 0;
    }

    span.composer {
        width: 6rem;
    }

    span.piece-title-container {
        width: 12rem;
    }

    a.piece-title {
        text-decoration: none;
        color: var(--text-brand);
    }

    li.piece-details > span.deficient-piece-title {
        color: var(--text-neutral);
        width: 12rem;
    }

    a.piece-title:hover {
        text-decoration: underline;
    }

    h2.primary-section-header, h3.secondary-section-header {
        color: var(--text-neutral);
        margin: 0;
    }

    h3.secondary-section-header.open {
        color: var(--text-contrast);
    }

    h2.primary-section-header {
        @include fonts.themed-font('170', 'normal');
    }

    h3.secondary-section-header {
        @include fonts.themed-font('130', 'normal');
    }
</style>
