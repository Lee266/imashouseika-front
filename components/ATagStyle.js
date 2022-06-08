const ATagStyle = (props) => {
  return ( 
    <>
      <a 
        className="ml-2 underline text-blue-500 hover:text-blue-800"
        href={props.link}>
        {props.linkName}
      </a>
    </>
   );
}
 
export default ATagStyle;