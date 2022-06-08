import Layout from "../components/Layout/layout";
import ATagStyle from "../components/ATagStyle";
import Test from "../components/Test";

const homePageLinks = () => {
  return ( 
    <div>
      <h1>リンク</h1>
      <div className="md:flex">
        <p>仙台朝市商店街振興組合</p>
        <a className="ml-2 underline text-blue-500 hover:text-blue-800" href="http://www.sendaiasaichi.com">http://www.sendaiasaichi.com</a>
      </div>
      <div className="md:flex">
        <p>仙台中央青果卸売株式会社　仙印</p>
        <ATagStyle 
          link={"http://www.senjirushi.com"}
          linkName={"http://www.senjirushi.com"}
        />
      </div>
      <p>※このホームページへのリンクは基本的に自由です。トップページ(http://www.imasho-seika.jp)へのリンクをお願いします。</p>
      <p>メールでご連絡をいただけると幸いです。</p>
    </div>
   );
}
 
export default homePageLinks;

homePageLinks.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}