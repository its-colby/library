<script lang="ts">
    import { Tier } from "$lib/content/music";

    const legend = {
        [Tier.AMAZING]: "Emotionally captivating from start to end.",
        [Tier.PARTIALLY_AMAZING]: "Emotionally captivating for 1 or more movements.",
        [Tier.NOTABLE]: "1 or more memorable themes.",
        [Tier.DEFICIENT]: "No memorable themes or emotional captivation."
    };

</script>

<div class="legend-container">
    {#each Object.entries(legend) as [tier, definition]}

    <div class="tier-definition-container">
        <span class="tier-label">{tier}</span>
        <span class="tier-label-separator">—</span>
        <span class="tier-definition">{definition}</span>
    </div>

    {/each}
</div>

<style lang="scss">
    @use "$lib/front-end/theme/fonts";

    div.legend-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    div.tier-definition-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    span {
        @include fonts.themed-font('100', 'normal');
        color: var(--text-neutral);
    }

    span.tier-label {
        color: var(--text-brand);
    }
</style>