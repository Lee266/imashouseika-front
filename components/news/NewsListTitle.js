import Link from "next/link";


const NewsListTitle = ({ news }) => {
  return ( 
    <>
      <li className="font-mono border-black border-t py-5 md:responsive lg:responsive">
        <Link href={`/news_detail/${news.id}`}>
          <a>
            <p className="mr-4">{news.created_at}</p>
            <p className="text-base text-ellipsis">{news.title}</p>
          </a>
        </Link>
      </li>
    </>
   );
}
 
export default NewsListTitle;