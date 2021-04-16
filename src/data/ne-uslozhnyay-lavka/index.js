import {categories} from "../categories";

const urlImg = '/img/posts/ne-uslozhnyay-lavka/';

export default {
    name: 'Разработка логотипа "Не&nbsp;усложняй"',
    img: `${urlImg}prew`,
    img2x: true,
    webp: true,
    big: false,
    title: 'Разработка логотипа "Не усложняй"',
    category: [
        categories.identity,
        categories.logo
    ],
    h1: "Разработка брендинга для сети<br> кальянных магазинов Не.усложняй:<br> кальянная лавка",
    date: "12.03.2021",
    slug: "ne-uslozhnyay-lavka",
    html: `<p> Задача: создать брендинг кальянных магазинов без  прямых образов отсылающих к кальянной тематике,  учитывая новых законодательные требования.</p>
           <picture>
                <source srcset="${urlImg}main.webp, ${urlImg}main@2x.webp 2x" type="image/webp">
                <img class="img--full mt-30" loading="lazy"  src="${urlImg}main.jpg" alt="Разработка брендинга 'Не усложняй'" />
           </picture>
           <p style="text-align: center">Основа бренда простая форма стикера для цен.</p>
           <picture>
                <source srcset="${urlImg}form.webp, ${urlImg}form@2x.webp 2x" type="image/webp">
                <img class="img--full" loading="lazy"  src="${urlImg}form.jpg" alt="Основа бренда 'Не усложняй'" />
           </picture>
           <p style="text-align: center">Версия логотипа для резки из пленки или гравировки</p>
           <div class="bl-half">
                <picture>
                    <source srcset="${urlImg}rezka.webp, ${urlImg}rezka@2x.webp 2x" type="image/webp">
                    <img class="img--full mt-30" loading="lazy"  src="${urlImg}rezka.jpg" alt="Основа бренда 'Не усложняй'" />
               </picture>
                <div class="bl-text-center">
                    <p>Основной задачей нашивок-патчей является кастомизация фирменный футболок с учетом города в котором находится заведение сети.</p>
                    <p>Для каждого города мыло разработано фирменное начертание и нанесены координать нахождения города,</p>
                </div>
           </div>
           <p style="text-align: center">Версия логотипа для резки из пленки или гравировки</p>
           <picture>
                <source srcset="${urlImg}code.webp, ${urlImg}code@2x.webp 2x" type="image/webp">
                <img class="img--full" loading="lazy"  src="${urlImg}code.jpg" alt="Основа бренда 'Не усложняй'" />
           </picture>
           <p style="text-align: center">Версия логотипа для резки из пленки или гравировки</p>
           <picture>
                <source srcset="${urlImg}nukl_lavka.webp, ${urlImg}nukl_lavka@2x.webp 2x" type="image/webp">
                <img class="img--full" loading="lazy"  src="${urlImg}nukl_lavka.jpg" alt="Основа бренда 'Не усложняй'" />
           </picture>
           <div class="bl-half">
                <div class="bl-text-center">
                    <p>Основной задачей нашивок-патчей является кастомизация фирменный футболок с учетом города в котором находится заведение сети.</p>
                    <p>Для каждого города мыло разработано фирменное начертание и нанесены координать нахождения города,</p>
                </div>
                <picture>
                    <source srcset="${urlImg}nukl_lavka-2.webp, ${urlImg}nukl_lavka-2@2x.webp 2x" type="image/webp">
                    <img class="img--full mt-30" loading="lazy"  src="${urlImg}nukl_lavka-2.jpg" alt="Основа бренда 'Не усложняй'" />
               </picture>
           </div>
           <p style="text-align: center">Версия логотипа для резки из пленки или гравировки</p>
           <picture>
                <source srcset="${urlImg}stickers_lavka.webp, ${urlImg}stickers_lavka@2x.webp 2x" type="image/webp">
                <img class="img--full" loading="lazy"  src="${urlImg}stickers_lavka.jpg" alt="Основа бренда 'Не усложняй'" />
           </picture>
           <p style="text-align: center">Версия логотипа для резки из пленки или гравировки</p>
           <picture>
                <source srcset="${urlImg}inst_lavka.webp, ${urlImg}inst_lavka@2x.webp 2x" type="image/webp">
                <img class="img--full" loading="lazy"  src="${urlImg}inst_lavka.jpg" alt="Основа бренда 'Не усложняй'" />
           </picture>
            <div class="bl-half bl-half--grid mt-30">
                <picture>
                    <source srcset="${urlImg}D_STUD.webp, ${urlImg}D_STUD@2x.webp 2x" type="image/webp">
                    <img class="img--full" loading="lazy"  src="${urlImg}D_STUD.jpg" alt="Основа бренда 'Не усложняй'" />
               </picture>
                <picture>
                    <source srcset="${urlImg}open.webp, ${urlImg}open@2x.webp 2x" type="image/webp">
                    <img class="img--full" loading="lazy"  src="${urlImg}open.jpg" alt="Основа бренда 'Не усложняй'" />
               </picture>
           </div>

    `,
}