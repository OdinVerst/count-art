<style>
    .header__theme-wrap {
        display: flex;
        gap: 24px;
    }

    .header__theme {
        position: relative;
        width: 35px;
        height: 20px;
        background: #16B5C7;
        border-radius: 20px;
    }

    .header__theme[aria-checked="false"] {
        background: #FFE500;
    }

    .header__theme-control {
        position: absolute;
        top: 50%;
        right: 0;
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        transform: translate(0, -50%);
        margin-right: 3px;
        pointer-events: none;
        transition: 0.2s;
    }

    [aria-checked="false"] .header__theme-control {
        right: calc(100% - 18px);
        margin-left: 3px;
    }
</style>

<script>
    const mapping = {
        "false": false,
        "true": true
    }

    const clickHandler = (evt) => {
        const { target } = evt;
        const value = target.getAttribute('aria-checked');
        target.setAttribute('aria-checked', !mapping[value]);

        document.documentElement.setAttribute('data-theme-light', value)
    }
</script>

<div class="header__theme-wrap">
    Переключить тему
    <div class="header__theme" on:click={clickHandler} role="checkbox" aria-checked="false" aria-label="Темная тема">
        <div class="header__theme-control"></div>
    </div>
</div>