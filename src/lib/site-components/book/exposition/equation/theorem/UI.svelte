<script lang="ts">
    import { Theorem } from "$book";
    import Prose_UI from "$book-ui/exposition/prose/Main.svelte";

    let { theorem } : { theorem: Theorem }= $props();
</script>

<div>
    <Prose_UI 
        prose={theorem.prose} 
        style_class="text-statement"
        
    />
    <span class="label">
        {theorem.ordinal.value.value}
    </span>
</div>


<style lang="scss">
    @use "$theme/screens";

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