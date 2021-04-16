<script>
    export let post;
    import Pin from './projectPin.svelte';
</script>

<style>
    .post {
        position: relative;
    }

    .post--big-left {
        grid-column: 1 / 3;
    }

    .post--big-right {
        grid-column: 3 / -1;
    }

    .post__img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        transition: 1.2s;
    }

    .post__img-wrap {
        display: flex;
        width: 100%;
        overflow: hidden;
    }

    .post__title {
        min-height: 60px;
        line-height: 1.4;
    }

    .post__title::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background: var(--color-separate);
        margin-bottom: 18px;
    }

    .post__title a {
        text-decoration: none;
        color: var(--interface-color);
    }

    .post__href-img {
        display: flex;
        position: relative;
    }

    .post__href-img::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        transition: 0.4s;
        color: var(--interface-color);
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--post-overlay);
    }

    .post__href-img:hover::after {
        opacity: 1;
    }

    .post__href-img:hover .post__img {
        transform: scale(1.3);
    }

    .post__pins-wrap {
        margin-top: 15px;
        max-width: 270px;
    }
    
    @media (max-width: 1165px) {
        .post--big-right {
            grid-column: 1 / 3;
        }

    }

    @media (max-width: 510px) {
        .post--big-right, .post--big-left {
            grid-column: 1;
        }

        .post__img {
            height: auto;
        }
    }
</style>

<article class="post {post.big ? 'post--big-' + post.big : ''}">
    <a class="post__href-img" href={'/projects/' + post.slug}>
        <picture class="post__img-wrap">
            {#if post.webp}
                <source type="image/webp" srcset="{post.img + '@1x.webp'} 1x, {post.img2x ? post.img + '@2x.webp' : post.img + '@1x.webp'} 2x">
            {/if}
            <img class="post__img" src={post.img + '@1x.jpg'} srcset="{post.img2x ? post.img + '@2x.jpg' : post.img + '@1x.jpg'} 2x" alt="Разработка фирменного стиля Tree Trunk">
        </picture>
    </a>
    <h3 class="post__title"><a href={'/projects/' + post.slug}>{@html post.name}</a></h3>
    <time>{post.date}</time>
    <div class="post__pins-wrap">
        {#each post.category as item}
            <Pin pinpost={item} />
        {/each}
    </div>
</article>