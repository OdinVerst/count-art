<script>
    import Social from './social.svelte';
    import Theme from './theme.svelte';
    import Logo from './logo.svelte';
    import Burger from './burger.svelte';
    export let segment;
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-top: 54px;
        padding-bottom: 30px;
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
        margin-bottom: 5px;
    }
    
    @media (max-width: 777px) {
        .header__meta {
            display: none;
        }

        .header {
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }

    @media (max-width: 420px) {
        .header {
            font-size: 14px;
        }
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
    <Burger />
</header>