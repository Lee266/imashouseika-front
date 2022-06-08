import Head from 'next/head'
import CommonHead from '../components/Layout/head/CommonHead'
import Image from 'next/image'
import Sns from '../components/sns/Sns'
import NewsList from '../components/news/NewsList'
import { getAllNewsData } from '../lib/getNewsData'
import Title from '../components/Layout/Title'
import Footer from '../components/Layout/footers/Footer'
import Navbar from '../components/Layout/headers/navbar1'
import TopImage from '../components/Layout/TopImage'


export default function Home(props) {
  return (
    <div className='mx-3'>
      <Head>
        <CommonHead />
        <title>今庄青果 Home</title>
        {/* SEO対策 */}
        <meta name="keywords" content="仙台伝統野菜,八百屋,野菜,果物,青果,青果物,ベジタブル,フルーツ,仙台,仙台駅前,仙台朝市"/>
        <meta name="description" content="仙台アメ横にて仙台伝統野菜や新鮮野菜・フルーツを元気に販売中！"/>
        {/* アイコン */}
        <link rel="icon" href="/favicon.ico" />
        {/* OGP */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content=" ページの URL"/>
        <meta property="og:title" content="今庄青果"/>
        <meta property="og:description" content=" ページのディスクリプション"/>
        <meta property="og:site_name" content="サイト名"/>
        <meta property="og:image" content=" サムネイル画像の URL"/>
        {/* ツイッター用 */}
        <meta name="twitter:card" content="カード種類"/>
        <meta name="twitter:site" content="@ツイッターユーザー名"/>
      </Head>


      <section id='sns' className='pt-12'>
        <Title title='SNS'/>
        <div className='mt-6 sm:px-[10%] sm:mt-12'>
          <Sns />
        </div>
      </section>

      <section id='news' className='pt-12'>
        <Title title="お知らせ"/>
        <div className='mt-6 sm:px-[10%] sm:mt-12'>
          <NewsList newsData={props.getNewsData}/>
        </div>
        <button>お知らせ一覧へ</button>
      </section>


      <section id='access_map' className='pt-12'>
        <Title title="アクセスマップ" />
        <div className={'flex justify-center mt-6 sm:pt-12'}>
          <Image 
            src={`/images/access_map.png`}
            alt="アクセスマップ"
            width={676}
            height={457}
          />
        </div>
      </section>

      <section id='test'>
        <p>{process.env.customKey}</p>
      </section>
      
    </div>
  )
}

export async function getStaticProps() {
  const getNewsData = await getAllNewsData();
  return {
    props: { getNewsData },
    revalidate: 3, 
  };
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <div>
        <TopImage />
        {page}
      </div>
      <Footer />
    </>
  )
}


