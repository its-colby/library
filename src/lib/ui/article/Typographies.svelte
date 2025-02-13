<script module lang="ts">
    import type { SectionTitle } from "$lib/math/tex/sectionction";
    export { title, section_title};
</script>

{#snippet title(text: string)}
    <h1>{text}</h1>
{/snippet}

{#snippet section_title(text: SectionTitle)}
    <h2>
        <span class="section-number">{text.number}</span>
        <span class="section-text">{text.text}</span>
    </h2>
{/snippet}

<style>
    h1, h2 {
        color: var(--text-neutral);
    }

    h1 {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
    }

    h2 {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 24px;
        font-weight: 600;
    }

    span.section-number {
        width: 20px;
    }
</style>
