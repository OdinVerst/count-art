<script>
    export let post;
</script>

<style>
    .post {
        position: relative;
    }

    .post__img {
        width: 100%;
    }

    .post__img-wrap {
        display: flex;
    }

    .post__title::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background: var(--text-color);
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
        content: 'Посмотреть проект';
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



</style>

<article class="post">
    <a class="post__href-img" href={'/projects/' + post.slug}>
        <picture class="post__img-wrap">
            {#if post.webp}
                <source type="image/webp" srcset="{post.img + '@1x.webp'} 1x, {post.img2x ? post.img + '@2x.webp' : post.img + '@1x.webp'} 2x">
            {/if}
            <img class="post__img" src={post.img + '@1x.jpg'} srcset="{post.img2x ? post.img + '@2x.jpg' : post.img + '@1x.jpg'} 2x" alt="Разработка фирменного стиля Tree Trunk">
        </picture>
    </a>
    <h3 class="post__title"><a href={'/projects/' + post.slug}>{post.name}</a></h3>
    <time>{post.date}</time>
    <p>{post.category}</p>
</article>