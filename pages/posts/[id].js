import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";


export default function PostData({ post }) {
  const router = useRouter();
  

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return(
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.created_at}</p>
        <p>{post.content}</p>
      </div>
    </Layout>
  );
}

// 投稿一覧のIDを取得
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

// 投稿詳細のデータを取得
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: { post },
    revalidate:3, 
  };
}
