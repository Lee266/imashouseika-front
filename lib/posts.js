const SERVERURL = "http://127.0.0.1:8000/";

export async function getAllPostsData() {
  const res = await fetch(new URL(`${SERVERURL}api/post/`));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(`${SERVERURL}api/post/`));
  const posts = await res.json();
  
  return posts.map((newsData) => {
    return {
      params: {
        id: String(newsData.id),
      },
    };
  })
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
  const newsDetail = await res.json();
  return newsDetail;
}