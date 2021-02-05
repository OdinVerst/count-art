<script>
    import Social from './Social/index.svelte';
    import Theme from './Theme/index.svelte';
    import Logo from './Logo/index.svelte';
    import Burger from './Burger/index.svelte';
    import Nav from './Nav/index.svelte'
    import MobileMenu from './mobile.svelte';

    export let segment;
    import { mobileMenuOpen } from '../../utils/stores.js';

    let stateMobileMenu = false;

    mobileMenuOpen.subscribe(value => {
        stateMobileMenu = value;
    })
</script>

<style>
    .header {
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }

    .header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-top: 54px;
        padding-bottom: 30px;
    }

    .header__logo-wrap {
        display: flex;
        align-items: center;
        color: #9C9C9C;
        text-decoration: none;
    }

    .header__meta {
        display: flex;
        margin-bottom: 5px;
    }
    
    @media (max-width: 777px) {
        .header {
            margin-bottom: 18px;
        }

        .header__meta {
            display: none;
        }

        .header__wrapper {
            position: relative;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--text-color);
        }

        .header__wrapper::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: var(--text-color);
            margin-bottom: -20px;
        }

        .nav__wrapper {
            display: none;
        }
    }

    @media (max-width: 420px) {
        .header__wrapper {
            font-size: 14px;
        }
    }
</style>

<header class="header">
    <div class="header__wrapper wrapper">
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
    </div>
    <div class="nav__wrapper">
        <Nav {segment} />
    </div>
    {#if stateMobileMenu}
        <MobileMenu />
    {/if}
</header>