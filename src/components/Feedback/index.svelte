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

    .feedback__label {
        position: relative;
    }

    .feedback__label-text {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 2px 5px;
        background: var(--text-color);
        border-radius: 5px;
        color: var(--bg-color);
        font-size: 14px;
        margin-right: 5px;
        opacity: 0;
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
        position: relative;
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

<script>
    import Heading from '../Heading/index.svelte';
    import Alert from './alert.svelte';
    let message = false;

    const showMsg = (form) => {
        const allInputsText = form.querySelectorAll('.feedback__label-text');
        [...allInputsText].forEach(item => {
            item.style.opacity = 0;
        })
        message = true;
        setTimeout(() => {
            message = false
        }, 2000)
    }

    const submitHandler = (evt) => {
        const {target} = evt;
        const formData = new FormData(target);
        const object = {};

        formData.forEach((value, key) => object[key] = value);
        fetch('/contacts.json', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "send") {
                    showMsg(target);
                    target.reset();
                }
            });
    }

    const changeInputs = (evt) => {
        const {target} = evt;
        const name = target.parentElement.querySelector('.feedback__label-text');
        name.style.opacity = target.value ? 1 : 0;
    }
</script>


<section class="feedback">
    <Heading name="Заказать дизайн" center={true}/>

    <form class="feedback__form" on:submit|preventDefault={submitHandler}>
        <div class="feedback__form-wrap wrapper">
            <label class="feedback__label">
                <input name="company" on:change={changeInputs} class="feedback__input" type="text"
                       placeholder="Название компании">
                <span class="feedback__label-text">Название компании</span>
            </label>
            <label class="feedback__label">
                <input name="name" on:change={changeInputs} class="feedback__input" required type="text" placeholder="Имя">
                <span class="feedback__label-text">Имя</span>
            </label>
            <label class="feedback__label">
                <input name="email" on:change={changeInputs} class="feedback__input" required type="email"
                       placeholder="Электронная почта">
                <span class="feedback__label-text">Email</span>
            </label>
            <label class="feedback__label">
                <input name="phone" on:change={changeInputs} class="feedback__input" type="tel"
                       placeholder="Телефон или меседжер для связи">
                <span class="feedback__label-text">Телефон</span>
            </label>
            <label class="feedback__label feedback__label--textarea">
                <textarea name="message" on:change={changeInputs} class="feedback__input feedback__input--textarea"
                          placeholder="Короткое описание проекта"></textarea>
                <span class="feedback__label-text">Сообщение</span>
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
            {#if message}<Alert />{/if}
            <button class="feedback__button">Отправить</button>
        </div>
    </form>
</section>