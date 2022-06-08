const FooterIcon = ({to, d}) => {
  return ( 
    <>
      <a className="ml-3 text-gray-500" href={to} target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d={d}></path>
        </svg>
      </a>
    </>
   );
}
 
export default FooterIcon;