import posts from "../../data/posts";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      name: post.name,
      slug: post.slug,
      img: post.img,
      desc: post.desc,
      category: post.category,
      date: post.date,
      category_url: post.category_url,
    };
  })
);

const contentsFilter = (category) => {
  return JSON.stringify(
    posts.filter((post) => {
      if (post.category_url === category) {
        return {
          name: post.name,
          slug: post.slug,
          img: post.img,
          desc: post.desc,
          category: post.category,
          date: post.date,
          category_url: post.category_url,
        };
      }
    })
  );
};

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}

export function post(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  if (req.body.category) {
    res.end(contentsFilter(req.body.category));
  } else {
	res.end(contents);
  }
}
