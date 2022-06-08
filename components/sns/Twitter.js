import Script from "next/script";

const Twitter = (props) => {
  return ( 
    <div id="twitter">
        <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></Script>

        <a 
          className="twitter-timeline" 
          href="https://twitter.com/imashoseika"
          data-chrome="nofooter" 
          data-height="400" 
          data-tweet-limit=""
          >
          Tweets by imashoseika
        </a> 
    </div>  
   );
}
 
export default Twitter;