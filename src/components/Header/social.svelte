<script>
    import SocialList from "../../data/social.json"
    const { social } = SocialList;
</script>

<style>
    .header__link {
        display: flex;
        width: 20px;
        height: 20px;
        fill: var(--text-color);
    }

    .header__link:hover {
        fill: var(--second-color);
    }

    .header__link-ico {
        width: 100%;
        height: 100%;
    }
</style>

{#each social as item}
    <a class="header__link" href={item.url} aria-label={item.label}>
        <svg class="header__link-ico" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}>
            {#each item.svg as path}
                <path d={path} />
            {/each}
        </svg>
    </a>
{/each}