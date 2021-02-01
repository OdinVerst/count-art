<style>
    .burger {
        position: relative;
        display: none;
        width: 40px;
        height: 24px;
        padding: 0;
        border: none;
        background: none;
        border-top: 2px solid var(--text-color);
        border-bottom: 2px solid var(--text-color);
        margin-left: 22px;
    }

    .burger::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 2px;
        background: var(--text-color);
        transform: translateY(-50%);
    }

    @media (max-width: 777px) {
        .burger {
            display: block;
        }
    }
</style>

<button class="burger" aria-label="Показать меню">

</button>