<script context="module">
    export function preload() {
        return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    import Banner from '../components/Banner/index.svelte';
    import ProjectList from '../components/Projects/projectList.svelte';
    import Company from '../components/Company/index.svelte';
    import Feedback from '../components/Feedback/index.svelte';
    import MessageButton from '../components/MessageButton/index.svelte';

    export let posts;
</script>

<svelte:head>
	<title>Count ART</title>
    <meta name="description" content="Дизайн студия Александра Раздолянского" />
</svelte:head>

<div class="main_container">
    <Banner />
    <ProjectList {posts} />
    <Company />
    <MessageButton />
    <Feedback />
</div>


