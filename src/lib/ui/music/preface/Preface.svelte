<script lang="ts">
    import Legend from "./Legend.svelte"
</script>


<aside>
    <p>
        This page presents a collection of instrumental music that can be organized by composer, genre, or my own judgement of its quality as a romantic piece.
    </p>
    <p>
        This page is intended for those who enjoy romantic music and want to discover new pieces or better performances. If you're not an avid listener, this page is not for you. In order to enjoy romantic music, your mind must be trained to automatically recognize the creation and resolution of musical tension.
    </p>
    <p>
        Please read the explanations below to understand the different tiers of judgement that I applied to each piece.
    </p>

    <Legend/>
</aside>

<style lang="scss">
    @use "$lib/theme/fonts";
    @use "$lib/theme/screens";

    aside {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 20px;

        @include screens.desktop {
            padding-bottom: 3rem;
        }

        @include screens.mobile {
            padding-bottom: 2rem;
        }
    }

    p {
        color: var(--text-neutral);
        @extend %base-font;

        margin: 0px;
        margin-bottom: 5px;
    }
</style>