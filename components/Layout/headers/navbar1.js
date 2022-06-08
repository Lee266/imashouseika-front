import {useState} from 'react'
import Link from "next/link"
import HeaderList from './HeaderList'
import MobileHeaderList from './MobileHeaderList'
import Hamburger from './Hamburger'


function MobileNav({open, setOpen}) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter`}>
        <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <Link href={"/"}>
              <a className="text-xl font-semibold">今庄青果</a>
            </Link>
        </div>
        <div className="">
            <ul className='flex flex-wrap'>
                <MobileHeaderList open={open} setOpen={setOpen} name="Home" link="/"/>
                <MobileHeaderList open={open} setOpen={setOpen} name={"お知らせ"} link={"/news"}/>
                <MobileHeaderList open={open} setOpen={setOpen} name={"リンク"} link={"/rinks"}/>
                <MobileHeaderList open={open} setOpen={setOpen} name={"店舗紹介"} link={"/"}/>
                <MobileHeaderList open={open} setOpen={setOpen} name={"ギャラリー"} link={"/gallery"}/>
                <MobileHeaderList open={open} setOpen={setOpen} name={"レシピ"} link={"/"}/>
                <MobileHeaderList open={open} setOpen={setOpen} name={"お問い合わせ"} link={"/contact"}/>
            </ul>
        </div>  
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

      return (
          <nav className="w-screen sticky top-0 flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center z-50">
              <MobileNav open={open} setOpen={setOpen}/>
              <div className="flex items-center">
                <Link href={"/"}>
                  <a className="text-2xl font-semibold whitespace-nowrap">今庄青果</a>
                </Link>
              </div>
              <div className="flex justify-end items-center">
                  <Hamburger open={open} setOpen={setOpen}/>
                  <div className="hidden md:flex">
                      <div className="">
                        <ul className='flex'>
                            <HeaderList  name="Home" link="/"/>
                            <HeaderList  name={"お知らせ"} link={"/news"}/>
                            <HeaderList  name={"リンク"} link={"/rinks"}/>
                            <HeaderList  name={"店舗紹介"} link={"/"}/>
                            <HeaderList  name={"ギャラリー"} link={"/gallery"}/>
                            <HeaderList  name={"レシピ"} link={"/"}/>
                            <HeaderList  name={"お問い合わせ"} link={"/contact"}/>
                        </ul>
                     </div>  
                  </div>
              </div>
          </nav>
      )
  }