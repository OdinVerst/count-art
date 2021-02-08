<script>
    import { catalogCategory } from '../../utils/stores.js';
    import { categories } from "../../data/categories";

    let nameCategory = 'all'

    catalogCategory.subscribe(val => {
        nameCategory = val;

        if (nameCategory !== 'all') {
            nameCategory = categories[val].name;
        }
    });


    const clickHandler = () => {
        catalogCategory.update(() => 'all');
    }
</script>

<style>
    .filter {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 15px;
        align-items: center;
        transition: 0.2s;
    }

    .filter__ico {
        width: 20px;
        height: 20px;
        fill: var(--text-color);
    }

    .hide {
        opacity: 0;
    }

    .current-pin {
        color: var(--second-color);
        padding: 2px 7px;
        border-radius: 21px;
        border: 1px solid;
    }

    .remove-pin {
        background: transparent;
        border: none;
        padding: 0;
    }

    .remove-pin__ico {
        width: 9px;
        fill: var(--color-separate);
        transition: 0.2s;
    }

    .remove-pin:hover .remove-pin__ico {
        fill: var(--text-color);
    }
</style>

<div class="filter {nameCategory === 'all' ? 'hide' : ''}">
    <div class="current-pin">{ nameCategory }
        <button aria-label="Удалить фильтр" on:click={clickHandler} class="remove-pin">
            <svg class="remove-pin__ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.57 121.57">
                <path d="M7.46,121.57a7.46,7.46,0,0,1-5.28-12.73L108.84,2.18a7.46,7.46,0,1,1,10.55,10.55L12.73,119.39A7.45,7.45,0,0,1,7.46,121.57Z"/>
                <path d="M114.11,121.57a7.45,7.45,0,0,1-5.27-2.18L2.18,12.73A7.46,7.46,0,0,1,12.73,2.18L119.39,108.84a7.46,7.46,0,0,1-5.28,12.73Z"/>
            </svg>
        </button>
    </div>
    <svg class="filter__ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.1 15.7">
        <path d="M7.2 0a3.7 3.7 0 00-3.6 2.9H.8a.8.8 0 000 1.7h2.8a3.7 3.7 0 007.2 0h10.5a.8.8 0 000-1.7H10.8A3.7 3.7 0 007.2 0zm0 5.7a2 2 0 112-2 2 2 0 01-2 2zM15 8.3a3.7 3.7 0 00-3.6 2.9H.8a.8.8 0 000 1.7h10.6a3.7 3.7 0 007.2 0h2.7a.8.8 0 000-1.7h-2.7A3.7 3.7 0 0015 8.3zm0 5.7a2 2 0 112-2 2 2 0 01-2 2z"/>
    </svg>
</div>
