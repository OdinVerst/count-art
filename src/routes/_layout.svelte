<script>
	import Header from '../components/Header/index.svelte';
	import Nav from '../components/Nav/index.svelte';
</script>

<Header/>
<Nav />
<main>
	<slot></slot>
</main>