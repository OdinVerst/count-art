<script>
    import Heading from '../Heading/index.svelte';
    import ClientsList from '../../data/clients.json';
</script>

<style>
    .company__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 30px;
        align-items: center;
        margin: 25px auto;
    }

    .company__logo {
        max-width: 100%;
        filter: grayscale(1) contrast(0.2);
    }

    .company__logo:hover {
        filter: none;
    }

    .company__item {
        display: flex;
        justify-content: center;
    }
</style>

<section class="company">
    <Heading name="Наши заказчики" />
    <div class="wrapper company__grid">
        {#each ClientsList.clients as item}
            <div class="company__item">
                <img src={item.img} class="company__logo" alt={item.alt}>
            </div>
        {/each}
    </div>
</section>