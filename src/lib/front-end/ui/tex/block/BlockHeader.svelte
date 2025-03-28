<script lang="ts">
    import katex from 'katex';
    import 'katex/dist/katex.min.css';
    import { BlockHeader } from "$lib/tex";

    let { header }: { header: BlockHeader } = $props();

    const title = katex.renderToString(header.title.value, { throwOnError: false });
    const label = katex.renderToString(header.label.label().value, { throwOnError: false });
</script>

<div>
    <span class="title">
        {@html title}
    </span>
    <span class="label">
        {@html label}
    </span>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

</style>