<script context="module">
    export function preload() {
        return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    import ProjectList from '../../components/Projects/projectList.svelte';
    import Feedback from '../../components/Feedback/index.svelte'

    export let posts;
</script>

<svelte:head>
    <title>Count ART</title>
</svelte:head>

<div class="main_container">
    <ProjectList {posts} inner={true} />
    <Feedback />
</div>