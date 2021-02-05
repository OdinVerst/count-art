<script>
    import Social from './Social/index.svelte';
    import Theme from './Theme/index.svelte';
    import Nav from './Nav/index.svelte';
    import MobileLogo from './Logo/mobile.svelte';

    import { mobileMenuOpen } from "../../utils/stores";
    export let segment;

    let hide = false;

    const clickHandler = () => {
        hide = true;
        setTimeout(() => { mobileMenuOpen.update(() => false); }, 400)
    }
</script>

<style>
    .header__wrapper--mobile {
        animation: show 0.4s;
        animation-fill-mode: forwards;
        position: absolute;
        z-index: 100;
        background: var(--bg-color);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-left: 780px;
    }

    .header__wrapper--mobile.hide {
        animation: hide 0.4s;
        animation-fill-mode: forwards;
    }

    .header__meta {
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;
    }

    .header__mobile-top {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @keyframes show {
        0% {
            margin-left: 780px;
        }
        100% {
            margin-left: 0;
        }
    }

    @keyframes hide {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: 780px;
        }
    }

    .close-menu {
        background: none;
        padding: 0;
        border: none;
    }

    .close-menu-ico {
        width: 13px;
        height: 22px;
        fill: none;
        stroke: var(--text-color)
    }
    
    @media (min-width: 778px) {
        .header__wrapper--mobile {
            display: none;
        }
    }
</style>

<div class="header__wrapper--mobile {hide ? 'hide' : ''}">
    <div class="header__mobile-top wrapper">
        <button class="close-menu" on:click={clickHandler} aria-label="Закрыть меню">
            <svg aria-hidden="true" class="close-menu-ico" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1L1 11L14 23" />
            </svg>
        </button>
        <MobileLogo />
    </div>
    <Nav {segment} />
    <div class="wrapper">
        <div class="header__meta">
            <Social/>
            <Theme/>
        </div>
    </div>
</div>