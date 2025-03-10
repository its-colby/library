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
        style_class="text-statement"
        
    />
    <span class="label">
        {inline_wrapper.label.label().value}
    </span>
</div>


<style lang="scss">
    @use "$lib/theme/screens";

    div {
        display: flex;

        padding: 0px;

        /* text-align: center; */

        text-indent: 0;
        text-rendering: auto;

        @include screens.desktop {
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row;
            gap: 20px;
        }

        @include screens.mobile {
            align-items: flex-start;
            flex-direction: column-reverse;
            gap: 10px;
        }
    }

    span.label {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        color: var(--text-brand);
    }
</style>