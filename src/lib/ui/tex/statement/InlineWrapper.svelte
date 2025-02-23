<script lang="ts">
    import { InlineWrapper } from "$lib/tex";
    import katex from "katex";
    import 'katex/dist/katex.min.css';
    import Inline from "$lib/ui/tex/inline/Inline.svelte";

    let { inline_wrapper } : { inline_wrapper: InlineWrapper }= $props();

    let label_string = katex.renderToString(inline_wrapper.label.label().value, { throwOnError: false });
</script>

<div>
    <Inline 
        inline={inline_wrapper.inline} 
        --font-size={"20px"}
        --font-weight={"600"}
        --line-height={"1.5"}
        --text-color={"var(--text-brand)"}
        --tex-color={"var(--text-brand)"}
        
    />
    <span class="label">
        {inline_wrapper.label.label().value}
    </span>
</div>


<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        align-items: flex-start;

        padding: 0px;

        /* text-align: center; */

        text-indent: 0;
        text-rendering: auto;
    }

    span.label {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
        color: var(--text-brand);
    }
</style>