import Image from "next/image"

const TopImage = () => {
  return ( 
    <>
      <section className='w-full h-screen'>
        <Image
          src={'/images/imshouseika_background.png'}
          alt="バックグラウンド"
          width={1020}
          height={520}
          loading='eager'
        />
      </section>
    </>
   );
}
 
export default TopImage;