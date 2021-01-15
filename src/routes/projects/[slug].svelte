<script context="module">
	export async function preload({ params }) {
		const resDetailPost = await this.fetch(`projects/${params.slug}.json`);
		const dataDetail = await resDetailPost.json();
		
		if (resDetailPost.status === 200) {
			return { post: dataDetail };
		} else {
			this.error(resDetailPost.status, data.message);
		}
	}
</script>


<script>
    export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<p>{post.name}</p>