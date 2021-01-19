<script>
    export let name, center, notTopBr;
    let centerClassName = ''
    let topClassName = ''
    if (center) centerClassName = 'heading--center'
    if (notTopBr) topClassName = 'heading--not-top'
</script>

<style>
    .heading {
        border-top: 2px solid var(--text-color);
        border-bottom: 2px solid var(--text-color);
    }

    .heading:not(.heading--center) h2 {
        border-right: 2px solid var(--text-color);
        padding: 27px 27px 27px 0;
        margin: 0;
        display: inline-block;
        font-size: 20px;
        min-width: 180px;
        color: var(--interface-color);
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
    <div class="wrapper">
        <h2>{name}</h2>
    </div>
</div>