<script>
    export let name, center;

    let centerClassName = ''
    if (center) centerClassName = 'heading--center'
</script>

<style>
    .heading {
        border-top: 2px solid var(--text-color);
        border-bottom: 2px solid var(--text-color);
    }

    .heading--center {
        text-align: center;
        color: var(--primary-color);
    }
</style>

<div class="heading {centerClassName}">
    <div class="wrapper">
        <h2>{name}</h2>
    </div>
</div>