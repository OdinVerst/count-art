<style>
    .nav__separate{
        border-top: 2px solid var(--color-separate);
        border-bottom: 2px solid var(--color-separate);
    }

    .nav {
        display: flex;
        justify-content: flex-end;
    }

    .nav__list {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .nav__href {
        display: flex;
        color: var(--text-color);
        text-decoration: none;
        padding: 26px 60px;
        border-left: 2px solid var(--color-separate);
    }

    .nav__href:hover {
        color: var(--primary-color);
    }

    [aria-current], [aria-current]:hover {
        color: var(--second-color);
    }

    @media (max-width: 800px) {
        .nav__separate {
            border-bottom: none;
            padding-top: 20px;
            position: relative;
        }

        .nav__separate::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            background: var(--color-separate);
            height: 2px;
            top: 16px;
        }

        .nav__list {
            flex-direction: column;
            padding-top: 56px;
        }

        .nav {
            justify-content: flex-start;
        }

        .nav__href {
            padding: 0;
            border-left: none;
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 20px;
            color: var(--interface-color);
        }
    }
</style>

<script>
    import {mobileMenuOpen} from "../../../utils/stores";
    export let segment;

    const clickHandler = () => {
        mobileMenuOpen.update(() => false);
        return true;
    }
</script>

<div class="nav__separate">
    <nav class="nav wrapper">
        <ul class="nav__list">
            <li><a class="nav__href" on:click={clickHandler} aria-current="{segment === 'projects' ? 'page' : undefined}"  href="projects" >Проекты</a></li>
            <li><a class="nav__href" on:click={clickHandler} aria-current="{segment === 'about' ? 'page' : undefined}"  href="about">О Студии</a></li>
            <li><a class="nav__href" on:click={clickHandler} aria-current="{segment === 'contacts' ? 'page' : undefined}"  href="contacts">Контакты</a></li>
        </ul>
    </nav>
</div>