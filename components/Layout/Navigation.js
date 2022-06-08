import Link from "next/link"

export default function Navigation() {
  return(
    <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
      <Link href="/">
        <a className="text-4xl font-bold text-red-300">今庄青果</a>
      </Link>
      <nav className="ml-auto">
        <Link href="/gallery">
          <a className="mr-5">gallery</a>
        </Link>
        <Link href="/home_page_links">
          <a className="mr-5">リンク</a>
        </Link>
      </nav>
    </header>
  );
}