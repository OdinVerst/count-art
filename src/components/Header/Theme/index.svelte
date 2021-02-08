<style>
    .header__theme-wrap {
        display: flex;
        align-items: center;
    }

    .header__theme-wrap span {
        margin-right: 20px;
    }

    .header__theme {
        position: relative;
        width: 35px;
        height: 20px;
        background: var(--second-color);
        border-radius: 20px;
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

    @media (max-width: 800px) {
        .header__theme-wrap {
            width: 100%;
            margin-top: 45px;
            flex-direction: column-reverse;
            align-items: flex-start;
        }

        .header__theme-wrap span {
            max-width: 120px;
            margin-top: 14px;
        }
    }
</style>

<script>
    import {themeValue} from '../../../utils/stores.js';

    let bool = true;

    const themeValues = [
        {
            name: "light",
            isDark: "false",
            value: false
        },
        {
            name: "dark",
            isDark: "true",
            value: true
        }
    ];

    themeValue.subscribe(value => {
        const current = themeValues.find(item => item.name === value);
        bool = current.value;
    });

    const clickHandler = (evt) => {
        const {target} = evt;
        const value = target.getAttribute('aria-checked');
        const newValue = themeValues.find(item => item.isDark !== value);

        themeValue.update(value => newValue.name);
        localStorage.setItem('theme', newValue.name);
        document.documentElement.setAttribute('data-color-mode', newValue.name);
    }
</script>

<div class="header__theme-wrap">
    <span>Переключить тему</span>
    <div class="header__theme" on:click={clickHandler} role="checkbox" aria-checked={bool.toString()}
         aria-label="Темная тема">
        <div class="header__theme-control"></div>
    </div>
</div>