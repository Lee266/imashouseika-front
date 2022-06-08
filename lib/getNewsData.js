const SERVERURL = "http://127.0.0.1:8000/";

export async function getAllNewsData() {
  const res = await fetch(new URL(`${SERVERURL}api/news/`));
  const news = await res.json();
  return news;
}

export async function getAllNewsIds() {
  const res = await fetch(new URL(`${SERVERURL}api/news/`));
  const news = await res.json();
  
  return news.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  })
}

export async function getNewsData(id) {
  const res = await fetch(new URL(`${SERVERURL}api/news/${id}/`))
  const newsDetail = await res.json();
  return newsDetail;
}