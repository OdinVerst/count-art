import Neusloznai from  './ne-uslozhnyay/index';
import NeusloznaiLavka from  './ne-uslozhnyay-lavka/index';
import Lungo from  './lungo/index';
import Kanareikin from  './kanareikin/index';
import Woodu from  './woodu/index';

const posts = [
    Lungo,
    NeusloznaiLavka,
    Neusloznai
];

posts.forEach((post) => {
    post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
