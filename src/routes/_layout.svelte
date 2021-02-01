<script>
	import Header from '../components/Header/index.svelte';
	import Nav from '../components/Nav/index.svelte';
	import Footer from  '../components/Footer/index.svelte';

    export let segment;
</script>

<Header {segment} />
<Nav {segment} />
<main>
	<slot></slot>
</main>
<Footer />