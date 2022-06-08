import Link from "next/link"

const MobileHeaderList = (props) => {
  return ( 
    <>
      <li className='w-1/2   pl-6 bg-main text-white'>
          <Link href={props.link}>
              <a className="text-xl font-medium" onClick={() => setTimeout(() => {{props.setOpen(!props.open)}}, 100)}>
                  {props.name}
              </a>
          </Link>
      </li>
    </>
   );
}
 
export default MobileHeaderList;
