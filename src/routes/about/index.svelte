<script>
    import Feedback from "../../components/Feedback/index.svelte";
    import SocialList from "../../data/social.json";

    const {social} = SocialList;
</script>

<style>
    .page-inner {
        display: grid;
        grid-template-rows: 1fr auto;
        min-height: 100%;
        color: var(--interface-color);
        line-height: 1.3;
    }

    .about-img {
        max-width: 100%;
        margin: 50px 0;
    }

    .about-text {
        max-width: 435px;
        margin-top: 40px;
    }
</style>

<svelte:head>
    <title>Count ART</title>
</svelte:head>

<div class="page-inner">
    <div class="wrapper contacts">
        <h1>Мы те, кому можно доверить<br> визуализацию сложных задач</h1>
        <p class="about-text">Уже более 10 лет помогаем бизнесу выделиться среди остальных</p>

        <p class="about-text">Каждый новый проект - персональный подход и уникальное воплощение</p>
        <img class="about-img" src="/img/about.jpg" alt="">
    </div>
    <Feedback/>
</div>