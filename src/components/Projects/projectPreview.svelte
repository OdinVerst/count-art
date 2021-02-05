<script>
    export let post;
</script>

<style>
    .post__img {
        width: 100%;
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
</style>

<article class="post">
    <picture>
        {#if post.webp}
            <source type="image/webp" srcset="{post.img + '@1x.webp'} 1x, {post.img2x ? post.img + '@2x.webp' : post.img + '@1x.webp'} 2x">
        {/if}
        <img class="post__img" src={post.img + '@1x.jpg'} srcset="{post.img2x ? post.img + '@2x.jpg' : post.img + '@1x.jpg'} 2x" alt="Разработка фирменного стиля Tree Trunk">
    </picture>
    <h3 class="post__title"><a href={'/projects/' + post.slug}>{post.name}</a></h3>
    <time>{post.date}</time>
    <p>{post.category}</p>
</article>