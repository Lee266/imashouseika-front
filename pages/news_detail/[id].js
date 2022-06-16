import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import { getAllNewsIds, getNewsData } from "../../lib/getNewsData";



export default function PostData({ news }) {
  const router = useRouter();
  console.log(news.image);
  let newsImage
  

  if (router.isFallback || !news) {
    return <div>Loading...</div>;
  }
  // if (news.image) {
  //   return <img href={news.image} />;
  // }
  
  return(
    <Layout>
      <div>
        <h1>{news.title}</h1>
        <p>{news.created_at}</p>
        <img src={news.image} />
        {/* {newsImage} */}
        <p>{news.content}</p>
      </div>
    </Layout>
  );
}

// 投稿一覧のIDを取得
export async function getStaticPaths() {
  const paths = await getAllNewsIds();
  return {
    paths,
    fallback: true,
  };
}

// 投稿詳細のデータを取得
export async function getStaticProps({ params }) {
  const news = await getNewsData(params.id);
  return {
    props: { news },
    revalidate:3, 
  };
}
