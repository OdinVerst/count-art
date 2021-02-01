<script>
    import Feedback from "../../components/Feedback/index.svelte";
    import SocialList from "../../data/social.json";

    const { social } = SocialList;
</script>

<style>
    .page-inner {
        display: grid;
        grid-template-rows: 1fr auto;
        min-height: 100%;
        color: var(--interface-color);
        line-height: 1.3;
    }

    .tel-href {
        display: inline-block;
        color: inherit;
        font-size: 26px;
        text-decoration: none;
        margin: 25px 0 40px;
    }

    .tel-href:hover {
        text-decoration: underline;
        color: var(--second-color);
    }

    .social-list {
        display: flex;
        margin: 30px 0 20px;
    }

    .social-list__ico {
        width: 38px;
        height: 38px;
    }

    .social-list__link {
        fill: var(--interface-color);
        margin-right: 13px;
    }

    .social-list__link:hover {
        fill: var(--second-color);
    }
</style>

<svelte:head>
    <title>Count ART</title>
</svelte:head>

<div class="page-inner">
    <div class="wrapper contacts">
        <h1>Связаться с нами можно<br> очень просто:</h1>
        <p>По телефону</p>
        <a class="tel-href" href="tel:+799999999">+7 920 999 99 99</a>
        <p>или в наших соцсетях</p>
        <div class="social-list">
            {#each social as item}
                <a class="social-list__link" href={item.url} aria-label={item.label}>
                    <svg class="social-list__ico" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}>
                        {#each item.svg as path}
                            <path d={path} />
                        {/each}
                    </svg>
                </a>
            {/each}
        </div>
    </div>
    <Feedback />
</div>