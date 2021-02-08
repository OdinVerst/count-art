<script>
	import {is404} from "../utils/stores";
    import { onDestroy } from 'svelte';

    export let status;
	export let error;
	import Error404 from '../components/404/index.svelte';

	const dev = process.env.NODE_ENV === 'development';

    is404.update(() => true);
    onDestroy(() => is404.update(() => false))
</script>


<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if status === 404}
    <Error404 />
{:else}
    <h1>{status}</h1>

    <p>{error.message}</p>
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
