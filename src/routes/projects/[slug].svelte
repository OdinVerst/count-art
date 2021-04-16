<script context="module">
	export async function preload({ params }) {
		const resDetailPost = await this.fetch(`projects/${params.slug}.json`);
		const data = await resDetailPost.json();

		if (resDetailPost.status === 200) {
			return { post: data};
		} else {
			this.error(resDetailPost.status, data.message);
		}
	}
</script>

<script>
    export let post;

    import { onMount } from 'svelte';
    import Swiper, { Navigation } from 'swiper';

    onMount(() => {
        Swiper.use([Navigation]);
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
    });

</script>

<style>
    .back-to-project {
        color: var(--second-color);
        transition: 0.2s;
        text-decoration: none;
        border-bottom: 1px solid;
    }

    .back-to-project::before {
        content: '<';
        display: inline-block;
        padding-right: 5px;
    }

    .back-to-project:hover {
        color: var(--primary-color);
        border-bottom-color: transparent;
    }

    .project {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .project__title {
        text-align: center;
        font-size: 24px;
        margin: 50px 0;
        line-height: 1.23;
    }
</style>

<svelte:head>
    <title>{post.title} - Count Art</title>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
</svelte:head>


<div class="wrapper project">
    <a class="back-to-project" href="/projects">Вернуться к проектам</a>
    <div class="content">
        <h1 class="project__title">{@html post.h1}</h1>
        {@html post.html}
    </div>
</div>
