<script lang="ts">
    import Main from "$music-compilation-ui/Main.svelte";
    import { afterNavigate } from "$app/navigation";
    import { root } from "$content";
    import { store } from "$store/breadcumb.svelte";

    afterNavigate(({ to }) => {
        if (to?.route?.id) {
            const breadcrumbs = root.find(to.route.id);
            if (breadcrumbs.length > 0) {
                store.set(breadcrumbs);
            }
        }
    });
</script>

<Main/>