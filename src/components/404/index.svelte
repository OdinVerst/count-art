<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        max-height: 750px;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 31px;
        max-width: 390px;
        color: var(--interface-color);
    }

    a {
        color: var(--second-dark);
        text-decoration: none;
        max-width: 295px;
        display: inline-block;
        font-size: 17px;
    }

    @media (max-width: 780px) {
        .wrapper {
            text-align: center;
        }
    }
</style>

<script>
    import { themeValue } from '../../utils/stores.js';

    let stateValue = 'dark';

    themeValue.subscribe(value => {
        stateValue = value;
    })
</script>

<section class="wrapper">
    <div class="banner__content">
        <h1 class="banner__heading">Очень жаль, но эта страница не найдена</h1>
        <a href="/" class="banner__subtitle">Попробуйте найти это через главную страницу</a>
    </div>
    <picture class="banner__img-wrap">
        <source type="image/webp" srcset="/img/404/404-{stateValue}@1x.webp 1x, /img/404/404-{stateValue}@2x.webp 2x">
        <img class="banner__img" src="/img/404/404-{stateValue}@1x.png" srcset="/img/404/404-{stateValue}@2x.png 2x" alt="Страница не найдена 404">
    </picture>
</section>