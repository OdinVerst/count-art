<script>
    export let post;
</script>

<style>
    .post-list__img {
        width: 100%;
    }
</style>

<article class="post-list__item">
    <img class="post-list__img" src={post.img} alt="Разработка фирменного стиля Tree Trunk">
    <h3>{post.name}</h3>
    <p>дата публикации проекта
        категориия дизайна</p>
</article>