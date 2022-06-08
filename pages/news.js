import Link from "next/link";
import Layout from "../components/Layout/layout";
import NewsList from "../components/news/NewsList";
import { getAllNewsData } from "../lib/getNewsData";

const news = ({getNewsData}) => {
  return ( 
    <div>
      <article>
        <NewsList newsData={getNewsData}/>
      </article>
    </div>
   );
}
 
export default news;

export async function getStaticProps() {
  const getNewsData = await getAllNewsData();
  return {
    props: { getNewsData },
    revalidate: 3, 
  };
}

news.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

