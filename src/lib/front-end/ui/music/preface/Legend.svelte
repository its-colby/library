<script lang="ts">
    import { Tier } from "$lib/content/music";

    const legend = {
        [Tier.AMAZING]: "Emotionally captivating from start to end.",
        [Tier.PARTIALLY_AMAZING]: "Emotionally captivating for 1 or more movements.",
        [Tier.NOTABLE]: "1 or more memorable themes.",
        [Tier.DEFICIENT]: "No memorable themes or emotional captivation."
    };

</script>

{#each Object.entries(legend) as [tier, definition]}

    <p class="tier-definition-container">
        <span class="tier-label">{tier}</span>
        <span class="tier-label-separator">—</span>
        <span class="tier-definition">{definition}</span>
    </p>

{/each}

<style lang="scss">
    @use "$lib/front-end/theme/fonts";

    p {
        margin: 0px;
        margin-bottom: 5px;
    }

    span {
        @extend %base-font;
        color: var(--text-neutral);
    }

    span.tier-label {
        color: var(--text-brand);
    }

    span.tier-label-separator {
        padding-left: 5px;
        padding-right: 5px;
    }
</style>