<script>
    import Social from './social.svelte';
    import Theme from  './theme.svelte';
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 54px 0 30px;
    }

    .header__logo {
        fill: white;
        width: 175px;
    }

    .header__logo-wrap {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .additional {
        fill: #16B5C7;
    }

    .header__meta {
        display: flex;
        gap: 24px;
    }

    @media (prefers-color-scheme: light) {
        .header__logo {
            fill: black;
        }
    }
</style>

<header class="header wrapper">
    <div class="header__logo-wrap">
        <svg class="header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 46">
            <path d="M61.3 30.9c-2.2 2-5 3-8.1 3-3.2 0-6-1-8.2-3-2.2-2.1-3.3-4.7-3.3-7.8 0-3 1.1-5.7 3.3-7.7 2.2-2.1 5-3.1 8.2-3.1 3.2 0 5.9 1 8.1 3 2.2 2.2 3.3 4.7 3.3 7.8 0 3.1-1 5.7-3.3 7.8zM59.7 23c0-1.8-.7-3.4-2-4.8a6 6 0 00-4.5-2 6 6 0 00-4.6 2 6.7 6.7 0 00-1.9 4.8c0 2 .6 3.5 1.9 4.8a6 6 0 004.6 2 6 6 0 004.6-2c1.2-1.3 1.9-2.9 1.9-4.8zM77.6 28.3a4 4 0 003.3 1.5 4 4 0 003.2-1.5 6 6 0 001.2-4V12.8h5v11.8c0 3-1 5.4-2.7 7a9.4 9.4 0 01-6.7 2.5c-2.7 0-5-.8-6.7-2.5-1.8-1.6-2.7-4-2.7-7V12.7h5v11.7c0 1.6.3 3 1.1 4zM113.6 12.7h4.9v21h-4.9l-10.4-13.1v13.2h-4.8v-21h4.5l10.7 13.5V12.7zM136.2 16.8v17h-4.9v-17h-6.2v-4h17.2v4h-6.1zM28.5 27.7a6.8 6.8 0 002.1-5.9h4.5c.2 3.6-.8 6.6-3.2 8.9-2.3 2.3-5 3.5-8 3.5-3.1 0-5.8-1-8-3.2a10.6 10.6 0 010-15.5c2.5-2.5 5.5-3.6 9.2-3.4l.3 4.4c-2.5-.3-4.5.4-6.1 2a6.4 6.4 0 00-2 4.4 6 6 0 002 4.6c1.5 1.4 3 2 4.8 2 1.7 0 3.2-.6 4.4-1.8z"/>
            <path d="M0 0v46h175V0H0zm171.7 3.2v39.6h-18.4V3.2h18.4zM3.3 3.2h148.4v39.6H3.3V3.2z"/>
            <path class="additional" d="M159.7 17l.9-1.8h4l.8 1.8h1l-3.3-7.2h-1l-3.5 7.2h1.1zm2.9-6.2l1.6 3.6h-3.3l1.7-3.6zM165.4 22.6c.3-.4.4-.8.4-1.4 0-.8-.2-1.4-.8-1.8-.6-.5-1.3-.7-2.3-.7h-2.9V26h1v-2.2h2.4l1.6 2.2h1.2l-1.8-2.4c.5-.2 1-.5 1.2-.9zm-2.7.2h-1.8v-3.2h1.8c.7 0 1.2.1 1.5.4.4.3.6.7.6 1.2s-.2 1-.6 1.2c-.3.3-.8.4-1.5.4zM159.5 30h2.5v6.2h1V30h2.7V29h-6.2v1z"/>
        </svg>
        <p>Студия<br>Александра Раздолянского</p>
    </div>
    <div class="header__meta">
        <Social />
        <Theme />
    </div>
</header>