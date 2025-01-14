<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        text: string;
        content: Snippet;
        position?: "above" | "below";
    }

    let { text = "", content, position = "above" } : Props = $props();
</script>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .tooltip-text {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
        box-sizing: border-box;
    }

    .tooltip-text.above {
        bottom: 125%; /* Position the tooltip above the text */
    }

    .tooltip-text.below {
        top: 125%; /* Position the tooltip below the text */
    }

    .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }
</style>

<div class="tooltip">
    {@render content()}
    <div class="tooltip-text {position}">{text}</div>
</div>
