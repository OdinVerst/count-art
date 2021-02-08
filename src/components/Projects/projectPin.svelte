<script>
    export let pinpost;
    import { catalogCategory } from '../../utils/stores.js';

    const clickHandler = (evt) => {
        const { target } = evt;
        const nameNewCategory = target.getAttribute('data-category');
        catalogCategory.update(() => {
            return nameNewCategory;
        })
    }
</script>

<style>
    .pin {
        font-family: 'Anonymous Pro', monospace;
        background: var(--bg-color);
        border: 1px solid var(--text-color);
        border-radius: 21px;
        color: var(--text-color);
        text-transform: lowercase;
        font-size: 12px;
        cursor: pointer;
        transition: 0.2s;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    .pin:hover {
        background: var(--text-color);
        color: var(--bg-color);
    }
</style>

<button class="pin" on:click={clickHandler} data-category={pinpost.category_url}>{pinpost.name}</button>