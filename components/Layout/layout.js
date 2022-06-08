import Navbar from "./headers/navbar1";
import Footer from "./footers/Footer";

export default function Layout(props){
  return(
    <div className="min-h-screen container w-screen">
      <div className="z-100 fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
      <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
      <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
      <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>
      <Navbar />
      <main className="justify-center w-screen">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}