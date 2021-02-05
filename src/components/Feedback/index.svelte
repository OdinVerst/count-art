<script>
    import Heading from '../Heading/index.svelte';

    const submitHandler = (evt) => {
        const { target } = evt;
        const formData = new FormData(target);
        const object = {};

        formData.forEach((value, key) => object[key] = value);
        fetch('/contacts.json', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
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
        margin: 0;
        border-radius: 0;
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
        display: flex;
        align-items: center;
        max-width: 340px;
        margin: 0 auto;
    }

    .check__box {
        position: relative;
        display: block;
        flex-shrink: 0;
        margin-right: 15px;
        width: 20px;
        height: 20px;
        overflow: hidden;
        background-color: var(--bg-color);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        box-shadow: 0 0 0 3px var(--primary-color);
    }

    .check__input {
        position: absolute;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        opacity: 0;
        z-index: -10;
    }

    .check__input:checked + .check__box::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 50%;
        background: var(--primary-color);
        transform: translate(-50%, -50%);
    }

    @media (max-width: 1170px) {
        .feedback__form {
            padding: 0 1.5em;
        }
    }

    @media (max-width: 860px) {
        .feedback__form--bottom {
            grid-template-columns: 1fr;
            gap: 25px;
        }

        .feedback__form--privacy {
            max-width: 100%;
        }
    }

    @media (max-width: 700px) {
        .feedback__form-wrap {
            grid-template-columns: 1fr;
        }

        .feedback__label--textarea {
            grid-column-start: auto;
            grid-row-start: auto;
            grid-row-end: auto;
        }
    }

    @media (max-width: 425px) {
        .feedback__form--privacy {
            font-size: 14px;
        }
    }
</style>

<section class="feedback">
    <Heading name="Заказать дизайн" center={true} />

    <form class="feedback__form" on:submit|preventDefault={submitHandler}>
        <div class="feedback__form-wrap wrapper">
            <label class="feedback__label">
                <input name="company" class="feedback__input" type="text" placeholder="Название компании">
            </label>
            <label class="feedback__label">
                <input name="name" class="feedback__input" type="text" placeholder="Имя">
            </label>
            <label class="feedback__label">
                <input name="email" class="feedback__input" type="email" placeholder="Электронная почта">
            </label>
            <label class="feedback__label">
                <input name="phone" class="feedback__input" type="tel" placeholder="Телефон или меседжер для связи">
            </label>
            <label class="feedback__label feedback__label--textarea">
                <textarea name="message" class="feedback__input feedback__input--textarea" placeholder="Короткое описание проекта"></textarea>
            </label>
        </div>
        <div class="feedback__form--separate"></div>
        <div class="feedback__form--bottom wrapper">
            <label class="feedback__form--privacy check option">
                <input class="check__input" type="checkbox">
                <div class="check__box"></div>
                Я согласен на обработку
                персональных данных
            </label>
            <button class="feedback__button">Отправить</button>
        </div>
    </form>
</section>