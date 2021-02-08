<style>
    .alert {
        position: absolute;
        right: 25%;
        left: auto;
        top: 0;
        width: auto;
        background: var(--bg-alert);
        text-align: center;
        transform: translate(50%, -100%);
        margin-top: -10px;
        padding: 17px 27px;
        border-radius: 100px;
        color: var(--primary-color);
        min-width: 300px;
    }
    
    @media (max-width: 860px) {
        .alert {
            right: 50%;
        }
    }
</style>

<div class="alert">
    Ура! Ваша заявка успешно отправлена.
</div>