<script>
	import Header from '../components/Header/index.svelte';
	import Nav from '../components/Nav/index.svelte';

    export let segment;
</script>

<Header {segment} />
<Nav {segment} />
<main>
	<slot></slot>
</main>