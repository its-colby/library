<script lang="ts">
    import { InlineWrapper } from "$lib/tex";
    import katex from "katex";
    import 'katex/dist/katex.min.css';
    import Inline from "$lib/ui/tex/inline/Inline.svelte";

    let { inline_wrapper } : { inline_wrapper: InlineWrapper }= $props();

    let label_string = katex.renderToString(inline_wrapper.label.label().value, { throwOnError: false });
</script>

<div>
    <Inline inline={inline_wrapper.inline} --font-size=""/>
    <span class="label">
        {@html label_string}
    </span>
</div>


<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        align-items: center;

        font: normal 1.21em KaTeX_Main,Times New Roman,serif;
        line-height: 1.2;
        text-indent: 0;
        text-rendering: auto;
    }

    span.label {
        font-size: 16px;
    }
</style>