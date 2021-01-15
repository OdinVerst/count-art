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
</style>

<article class="post">
    <img class="post__img" src={post.img} alt="Разработка фирменного стиля Tree Trunk">
    <h3 class="post__title"><a href={'/projects/' + post.slug}>{post.name}</a></h3>
    <p>{post.date}</p>
    <p>{post.category}</p>
</article>