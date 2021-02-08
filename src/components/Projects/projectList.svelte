<script>
    import ProjectPreview from './projectPreview.svelte';
    import Heading from '../Heading/index.svelte';
    import Filter from './Filter.svelte';
    import {catalogCategory} from "../../utils/stores";

    export let posts, inner;

    let resultPosts = posts;
    catalogCategory.subscribe(value => {
        if (value !== 'all') {
            resultPosts = posts.filter(item => {
                return item.category.find(item => item.category_url === value);
            });
        } else {
            resultPosts = posts;
        }
    })
</script>

<style>
    .post-list__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        gap: 18px;
        margin: 25px auto;
        grid-auto-flow: dense;
    }
</style>

<section class="project-list">
    <Heading name="Проекты" notTopBr={inner} component={Filter} />
    <div class="wrapper post-list__grid">
        {#each resultPosts as post}
            <ProjectPreview {post} />
        {/each}
    </div>
</section>