<script>
    import Heading from '../Heading/index.svelte';
</script>

<style>
    .feedback__form-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background: var(--text-color);
        gap: 2px;
        padding: 0 2px;
    }

    .feedback__form--separate {
        background: var(--text-color);
        height: 2px;
        width: 100%;
        margin-bottom: 20px;
    }

    .feedback__label--textarea {
        grid-column-start: 2;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    .feedback__input {
        font-family: 'Anonymous Pro', monospace;
        width: 100%;
        background: transparent;
        padding: 20px 25px;
        border: none;
        background: var(--bg-color);
        color: var(--text-color);
        font-size: 1.1em;
    }

    .feedback__input--textarea {
        height: 100%;
        resize: none;
        margin: 0;
    }

    .feedback__button {
        font-family: 'Anonymous Pro', monospace;
        background: transparent;
        border: 3px solid;
        color: var(--primary-color);
        font-size: 21px;
        padding: 10px 20px;
        font-weight: bold;
    }

    .feedback__form--bottom {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .feedback__form--privacy {
        text-align: center;
    }
</style>

<section class="feedback">
    <Heading name="Заказать дизайн" center={true} />

    <form class="feedback__form">
        <div class="feedback__form-wrap wrapper">
            <label class="feedback__label">
                <input class="feedback__input" type="text" placeholder="Название компании">
            </label>
            <label class="feedback__label">
                <input class="feedback__input" type="text" placeholder="Имя">
            </label>
            <label class="feedback__label">
                <input class="feedback__input" type="email" placeholder="Электронная почта">
            </label>
            <label class="feedback__label">
                <input class="feedback__input" type="tel" placeholder="Телефон или меседжер для связи">
            </label>
            <label class="feedback__label feedback__label--textarea">
                <textarea class="feedback__input feedback__input--textarea" placeholder="Короткое описание проекта"></textarea>
            </label>
        </div>
        <div class="feedback__form--separate"></div>
        <div class="feedback__form--bottom wrapper">
            <label class="feedback__form--privacy">
                <input type="checkbox">
                Я согласен на обработку
                персональных данных
            </label>
            <button class="feedback__button">Отправить</button>
        </div>
    </form>
</section>