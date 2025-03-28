<script lang="ts" generics="T">
    import type { Snippet } from 'svelte';

    interface Props {
        text: string;
        data?: T | undefined;
        content: Snippet<[T | undefined]>;
        position?: "above" | "below";
    }

    let { text = "", data = undefined, content, position = "above" } : Props = $props();
</script>

<div class="tooltip">
    {@render content(data)}
    <div class="tooltip-text {position}">{text}</div>
</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .tooltip-text {
        position: absolute;
        /* bottom: calc(100% + 8px); */
        left: 50%;
        transform: translateX(-50%);
        background: var(--card-contrast-background);
        color: var(--text-anti-contrast);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.1s ease;
        z-index: 1001;
    }

    .tooltip-text.above {
        bottom: 125%; /* Position the tooltip above the text */
    }

    .tooltip-text.below {
        top: 125%; /* Position the tooltip below the text */
    }

    .tooltip:hover .tooltip-text {
        opacity: 1;
    }
</style>
