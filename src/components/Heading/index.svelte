<script>
    export let name, center, notTopBr, component;
    let centerClassName = ''
    let topClassName = ''
    if (center) centerClassName = 'heading--center'
    if (notTopBr) topClassName = 'heading--not-top'
</script>

<style>
    .heading {
        border-top: 2px solid var(--color-separate);
        border-bottom: 2px solid var(--color-separate);
    }

    .heading:not(.heading--center) h2 {
        border-right: 2px solid var(--color-separate);
        padding: 27px 27px 27px 0;
        margin: 0;
        display: inline-block;
        font-size: 20px;
        min-width: 180px;
        color: var(--interface-color);
    }

    .heading__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .heading--not-top {
        border-top: none;
    }

    .heading--center {
        text-align: center;
        color: var(--primary-color);
    }
</style>

<div class="heading {centerClassName} {topClassName}">
    <div class="heading__wrapper wrapper">
        <h2>{name}</h2>
        {#if component}<svelte:component this={component}/> {/if}
    </div>
</div>