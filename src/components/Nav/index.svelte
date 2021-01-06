<style>
    .nav__wrap {
        border-top: 2px solid #9C9C9C;
        border-bottom: 2px solid #9C9C9C;
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
        color: #9C9C9C;
        text-decoration: none;
        padding: 26px 60px;
        border-left: 2px solid #9C9C9C;
    }

    .nav__href:hover {
        color: #16B5C7;
    }

    .nav__href.active {
        color: #FFE500;
    }
</style>

<div class="nav__wrap">
    <nav class="nav wrapper">
        <ul class="nav__list">
            <li><a class="nav__href" href="">Проекты</a></li>
            <li><a class="nav__href" href="">О Студии</a></li>
            <li><a class="nav__href active" href="">Контакты</a></li>
        </ul>
    </nav>
</div>