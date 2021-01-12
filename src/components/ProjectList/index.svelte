<script>
    import PostIMG from './img/post.jpg'
</script>

<style>
    .project-list__heading {
        border-top: 2px solid var(--text-color);
        border-bottom: 2px solid var(--text-color);
    }

    .post-list__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 25px auto;
    }

    .post-list__img {
        width: 100%;
    }
</style>

<section class="project-list">
    <div class="project-list__heading">
        <div class="wrapper">
            <h2>Проекты</h2>
        </div>
    </div>
    <div class="wrapper post-list__grid">
        <article class="post-list__item">
            <img class="post-list__img" src={PostIMG} alt="Разработка фирменного стиля Tree Trunk">
            <h3>Разработка фирменного стиля Tree Trunk</h3>
            <p>дата публикации проекта
                категориия дизайна</p>
        </article>

        <article class="post-list__item">
            <img class="post-list__img" src={PostIMG} alt="Разработка фирменного стиля Tree Trunk">
            <h3>Разработка фирменного стиля Tree Trunk</h3>
            <p>дата публикации проекта
                категориия дизайна</p>
        </article>

        <article class="post-list__item">
            <img class="post-list__img" src={PostIMG} alt="Разработка фирменного стиля Tree Trunk">
            <h3>Разработка фирменного стиля Tree Trunk</h3>
            <p>дата публикации проекта
                категориия дизайна</p>
        </article>

        <article class="post-list__item">
            <img class="post-list__img" src={PostIMG} alt="Разработка фирменного стиля Tree Trunk">
            <h3>Разработка фирменного стиля Tree Trunk</h3>
            <p>дата публикации проекта
                категориия дизайна</p>
        </article>
    </div>
</section>