import Link from "next/link";
import Image from "next/image";

const myLoader = ({src, width, quality}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Post({ post }) {
  console.log(post);
  return (
    <Link href={`/posts/${post.id}`}>
      <div>
        {/* <img alt="post" src={post.image} /> */}
        <Image
          loader={myLoader}
          src={post.image}
          alt="ギャラリーイメージ"
          width={360}
          height={240}
        />
        <div>
          <p>{post.title}</p>
        </div>
      </div>
    </Link>
  )
}