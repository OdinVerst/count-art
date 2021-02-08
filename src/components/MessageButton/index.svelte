<style>
    .message-btn {
        animation: showBtn 0.4s linear;
        animation-fill-mode: forwards;
        animation-delay: 0.2s;
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        color: var(--text-color);
        font-family: 'Anonymous Pro', monospace;
        font-size: 18px;
        max-width: 100px;
        text-align: left;
        opacity: 0;
    }

    .message-btn span {
        background: var(--bg-color);
        padding: 3px 5px;
        border-radius: 4px;
    }

    .message-btn.hide {
        animation: hide 0s linear;
        animation-fill-mode: forwards;
    }

    .message-btn__ico {
        width: 60px;
        height: 60px;
        background: var(--second-light);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-bottom: 13px;
    }

    @keyframes showBtn {
        0% {
            margin-top: 10px;
            margin-bottom: 10px;
            opacity: 0;
        }
        100% {
            margin-top: 0;
            margin-bottom: 0;
            opacity: 1;
        }
    }

    @keyframes hide {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>

<script>
    import { onMount } from 'svelte';
    import { throttle } from "../../utils/throttle";

    const positionState = {
        rightState: '20px',
        topState: '240px',
        bottomState: 'auto',
        position: 'absolute',
        hide: false
    };

    const positionCalc = () => {
        const widthWindows = document.body.clientWidth;
        if (widthWindows > 1170) {
            positionState.rightState = `${(widthWindows - 1170) / 2}px`
        } else {
            positionState.rightState = '20px';
        }

        positionState.hide = window.scrollY > document.querySelector('.feedback').offsetTop - (window.innerHeight / 1.5);

        if (widthWindows < 777) {
            positionState.topState = 'auto';
            positionState.bottomState = '25px';
            positionState.position = 'fixed';
        } else {
            if (window.scrollY > 214) {
                positionState.position = 'fixed';
                positionState.topState = '20px';
            } else  {
                positionState.position = 'absolute';
                positionState.topState = '240px';
            }
            positionState.bottomState = 'auto';
        }
    }

    onMount(() => {
        positionCalc();
        throttle('resize', 'optimizedResize');
        throttle('scroll', 'optimizedScroll');
        window.addEventListener('optimizedResize', positionCalc);
        window.addEventListener('optimizedScroll', positionCalc);
    });

    const clickHandler = () => {
        const feedback = document.querySelector('.feedback');

        window.scroll({
            top: feedback.offsetTop,
            behavior: "smooth"
        });
    }
</script>

<button class="message-btn {positionState.hide ? 'hide' : ''}" on:click={clickHandler} style="position: {positionState.position}; right: {positionState.rightState}; top: {positionState.topState}; bottom: {positionState.bottomState}; opacity: {positionState.opacity}">
    <div class="message-btn__ico">
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9205 11.0623C20.2261 13.7051 19.4531 15.9345 17.6192 17.8043C16.2708 19.1526 14.6528 19.8538 12.765 19.8538C10.8773 19.8718 9.13333 19.0807 7.55121 17.5346C5.9691 15.9704 5.23197 14.2265 5.30389 12.3028C5.3758 10.3791 6.11292 8.70707 7.51526 7.26878C9.27716 5.48889 11.4885 4.73379 14.1673 5.02145L13.8258 0.0233939C9.85248 -0.19235 6.49047 1.08413 3.73974 3.85284C1.27667 6.33389 0.0361499 9.28238 0.000192622 12.6624C-0.017786 16.0423 1.22274 18.9908 3.73974 21.4719C6.25675 23.9709 9.16929 25.1755 12.4774 25.1215C15.8034 25.0676 18.7519 23.7372 21.3408 21.1303C23.9297 18.5234 25.0804 15.1794 24.8287 11.1162L19.9205 11.0623Z" fill="black"/>
        </svg>
    </div>
    <span>Заказать
        дизайн</span>
</button>