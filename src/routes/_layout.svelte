<script>
	import Header from '../components/Header/index.svelte';
	import Footer from  '../components/Footer/index.svelte';

    export let segment;
</script>

<Header {segment} />
<main>
	<slot></slot>
</main>
<Footer />
