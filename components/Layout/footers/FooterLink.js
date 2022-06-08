const FooterLink = ({linkName}) => {
  return ( 
    <>
      <li>
        <a className="text-gray-600 hover:text-gray-800">{linkName}</a>
      </li>
    </>
   );
}
 
export default FooterLink;