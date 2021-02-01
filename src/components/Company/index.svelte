<script>
    import Heading from '../Heading/index.svelte';
    import ClientsList from '../../data/clients.json';
</script>

<style>
    .company__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 30px;
        margin: 25px auto;
    }

    .company__logo {
        max-width: 75px;
    }
</style>

<section class="company">
    <Heading name="Наши заказчики" />
    <div class="wrapper company__grid">
        {#each ClientsList.clients as item}
            <div class="company__item">
                <img src={item.img} class="company__logo" alt={item.alt}>
                <p>{@html item.name}</p>
            </div>
        {/each}
    </div>
</section>