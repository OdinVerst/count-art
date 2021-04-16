import {categories} from "../categories";

const urlImg = '/img/posts/woodu/';

export default {
    name: 'Брендинг для сети кофеен "Лунго кафе"',
    img: `${urlImg}prew`,
    img2x: true,
    webp: true,
    big: 'right',
    title: 'Брендинг для сети кофеен "Лунго кафе"',
    category: [
        categories.identity,
        categories.logo
    ],
    h1: "Разработка базового брендинга<br> для сети кофеен Лунго кафе",
    date: "12.03.2021",
    slug: "woodu",
    html: `<p> Задача: разработать запоминающийся брендинг для кофейни с четкой геометрией форм.</p>

           <img class="img--full mt-50" loading="lazy" src="${urlImg}main.jpg" alt="'Не усложняй' - логотип" />
           <div class="bl-half">
                <img class="img--full mt-50" loading="lazy" src="${urlImg}half-1.jpg" srcset="${urlImg}half-1@2x.jpg 2x" alt="Патч на футболку 'Не усложняй'" />
                <div class="bl-text-center">
                    <p>Базовые цветовые сочетания для применения логотипа Лунго кафе</p>
                </div>
           </div>
           
           <div class="bl-half">
                <div class="bl-text-center">
                    <p>Набор основных цветов брендинга</p>
                </div>
                <img class="img--full mt-50" loading="lazy" src="${urlImg}half-2.jpg" srcset="${urlImg}half-2@2x.jpg 2x" alt="Патч на футболку 'Не усложняй'" />
           </div>
           
           <img class="img--full mt-50" loading="lazy"  src="${urlImg}stikers.jpg" alt="Патч на футболку 'Не усложняй' Вариант 2" />
           <p class="mt-50" style="text-align: center"> Применение логотипа на разлинных носителях</p>
           <div class="bl-tr mt-50">
                <img class="img--full" src="${urlImg}tr-1.jpg" loading="lazy" alt="Вариант наклеек 'Не усложняй' (Самара/Сочи/Казань) " />
                <img class="img--full" src="${urlImg}tr-2.jpg" loading="lazy"  alt="Вариант наклеек 'Не усложняй' (Иркутск)" />
                <img class="img--full" src="${urlImg}tr-3.jpg" loading="lazy"  alt="Вариант наклеек 'Не усложняй' (Екатеринбург/Тюмень)" />
           </div>`,
}