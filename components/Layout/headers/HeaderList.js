import Link from "next/link"

const HeaderList = (props) => {
  return ( 
    <>
      <li className='mb-2 my-2 pl-6'>
          <Link href={props.link}>
              <a className="text-xl font-medium whitespace-nowrap relative group">
                <span>{props.name}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
              </a>
          </Link>
      </li>
    </>
   );
}
 
export default HeaderList;