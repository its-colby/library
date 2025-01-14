<script lang="ts">
    let { title, items } = $props();
</script>

<section>
    <h1>{title}</h1>
    <ul>
        {#each items as item}
            <li>
                <h3><a href={item.url}>{item.title}</a></h3>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        width: 500px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
        color: var(--text-neutral-color);
    }

    ul {
        padding-top: 10px;
        text-align: left;
        list-style: none;
        padding-left: 0;
    }

    h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
    }

    h3 a {
        text-decoration: none;
        color: var(--text-brand-color1);
    }

    h3 a:hover {
        text-decoration: underline;
    }

</style>