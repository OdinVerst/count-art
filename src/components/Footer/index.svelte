<script>
    const year = new Date().getFullYear();
</script>

<style>
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 0;
        margin-top: 50px;
        border-top: 2px solid var(--color-separate);
        border-bottom: 2px solid var(--color-separate);
    }

    .footer__logo {
        fill: var(--text-color);
        width: 30px;
        margin-right: 15px;
    }

    .dev::before {
        content: '/';
        color: var(--text-color);
        display: inline-block;
        margin: 0 15px;
    }
    
    @media (max-width: 543px) {
        .footer {
            flex-wrap: wrap;
        }

        .dev {
            position: relative;
            width: 100%;
            text-align: center;
            padding-top: 1em;
        }

        .dev::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 20px;
            height: 1px;
            background: var(--text-color);
            transform: translateX(-50%);
            margin: 5px 0;
        }
    }
</style>

<footer class="footer">
    <svg class="footer__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 53">
        <defs/>
        <path d="M33.5 24.7c.3 2.7-.4 4.9-2.3 6.8-1.3 1.3-3 2-4.8 2-2 0-3.7-.8-5.2-2.3a6.8 6.8 0 01-2.3-5.2c0-2 .8-3.6 2.2-5 1.8-1.9 4-2.6 6.7-2.3l-.4-5c-4-.2-7.3 1-10 3.8a12.3 12.3 0 000 17.6c2.5 2.5 5.4 3.7 8.7 3.7 3.3 0 6.3-1.4 8.9-4 2.5-2.6 3.7-6 3.4-10h-4.9z"/>
        <path d="M0 52.2l74 .1V.1L0 0v52.2zM50.3 3.7h20.1v45H50.3v-45zM3.6 3.6l44.9.1v45l-44.9-.1v-45z"/>
        <path d="M59.8 11.2l-3.7 8.2h1.2l1-2h4.3l.9 2h1.2L61 11.2h-1.2zm-1.2 5.2l1.8-4 1.8 4h-3.6zM63.5 25.8c.3-.4.5-1 .5-1.6 0-.9-.3-1.6-1-2-.5-.6-1.4-.8-2.4-.8h-3.2v8.1h1.2v-2.4H61l1.8 2.5H64l-2-2.8c.7-.2 1.1-.5 1.4-1zm-3 .3h-2v-3.7h2c.8 0 1.3.1 1.7.4.4.4.6.8.6 1.4 0 .6-.2 1-.6 1.4-.4.3-1 .5-1.7.5zM57 34h2.8v7.2H61v-7.1h2.8v-1H57v1z"/>
    </svg>
    <div class="copy">
        Count-art {year}©
    </div>
    <div class="dev">
        Разработано Frontpoterashka
    </div>
</footer>