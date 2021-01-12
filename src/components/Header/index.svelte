<script>
    import Social from './social.svelte';
    import Theme from './theme.svelte';
    import Logo from './logo.svelte';

    export let segment;
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 54px 0 30px;
    }

    .header__logo-wrap {
        display: flex;
        align-items: center;
        gap: 20px;
        color: #9C9C9C;
        text-decoration: none;
    }

    .header__meta {
        display: flex;
        gap: 24px;
    }

</style>

<header class="header wrapper">
    {#if segment !== undefined}
        <a class="header__logo-wrap" href="/">
            <Logo/>
        </a>
    {:else}
        <div class="header__logo-wrap">
            <Logo/>
        </div>
    {/if}
    <div class="header__meta">
        <Social/>
        <Theme/>
    </div>
</header>