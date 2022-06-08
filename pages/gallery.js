import Post from "../components/post/Post";
import { getAllPostsData } from "../lib/posts";
import { getAllNewsData } from "../lib/getNewsData"
import Layout from "../components/Layout/layout";



export default function Gallery({ posts }) {
  return(
    <div>
      <div>
        Gallery
      </div>
      <div>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}

Gallery.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
