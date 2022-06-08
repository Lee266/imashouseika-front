import NewsListTitle from "./NewsListTitle";
import { getAllNewsData } from "../../lib/getNewsData";
import Link from "next/link";

const NewsList = ({ newsData }) => {
  return ( 
    <>
      <ul>
        {newsData && newsData.map((news) => <NewsListTitle key={news.id} news={news} />)}
      </ul>
    </>
   );
}


 
export default NewsList;
