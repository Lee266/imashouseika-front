const Hamburger = ({open, setOpen}) => {
  return ( 
    <>
      <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {setOpen(!open)}}>
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
      </div>
    </>
   );
}
 
export default Hamburger;