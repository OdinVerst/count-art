<script>
    import ProjectPreview from './projectPreview.svelte';
    import Heading from '../Heading/index.svelte';

    export let posts;
</script>

<style>
    .post-list__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 25px auto;
    }
</style>

<section class="project-list">
    <Heading name="Проекты" />
    <div class="wrapper post-list__grid">
        {#each posts as post}
            <ProjectPreview {post} />
        {/each}
    </div>
</section>