const posts = [
    {
        name: "Разработка логотипа не усложняй.",
        img:
            "https://intelligenthookah.com/wp-content/uploads/2019/08/spectrum-dark.jpg",
        category: "Табак",
        h1: "Разработка логотипа <br>не усложняй. кальянная лавка",
        date: "14.08.2019",
        slug: "ne-uslozhnyay",
        category_url: "design",
        html: `<p>Основной задачей при разработке стало сождание базовой узнаваемой формы которая бы легко узнавалась и воспроизводилась, была понятна потенциальному покупателю</p>
               <p>Основной задачей при разработке стало сождание базовой узнаваемой формы которая бы легко узнавалась и воспроизводилась, была понятна потенциальному покупателю</p>
               <img class="img--full mt-50" src="/img/posts/test.jpg" />
            `,
    },
    {
        name: "Разработка логотипа не усложняй.",
        img:
            "https://intelligenthookah.com/wp-content/uploads/2019/08/spectrum-dark.jpg",
        category: "Табак",
        h1: "Разработка логотипа <br>не усложняй. кальянная лавка",
        date: "14.08.2019",
        slug: "ne-uslozhnyay-2",
        category_url: "design",
        html: "",
    },
];

posts.forEach((post) => {
    post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
