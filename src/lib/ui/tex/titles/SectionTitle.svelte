<script lang="ts">
    import { Title } from "$lib/tex";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    import 'katex/dist/katex.min.css';

    let { 
        title, 
        section_depth,
    }: { 
        title: Title, 
        section_depth: number,
    } = $props();

</script>


<svelte:element 
    this={section_depth === 1 ? 'h2' : 'h3'}
    id={title.href}
>
    <span class="number">
        {title.label.label().value}
    </span>

    <span class="text">
        <Inline 
            inline={title.inline}
            --font-size={section_depth === 1 ? '30px' : '24px'}
            --font-weight={"600"}
            --text-color={"var(--text-neutral)"}
        />
    </span>

</svelte:element>


<style>
    h2, h3 {
        scroll-margin-top: 100px;

        font-weight: 600;
        color: var(--text-neutral);

        display: flex;
        align-items: center;
        gap: 20px;

        margin: 0px;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 24px;
    }
</style>
