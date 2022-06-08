import Script from "next/dist/client/script";

const Facebook = (props) => {
  return ( 
    <div>
      <Script async defer 
        crossOrigin="anonymous" 
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v13.0" 
        nonce="H1kmM0uR">
      </Script>
      
      <div id="fb-root"></div>
      <div id="facebook">
        <div 
          className="fb-page"
          data-href="https://www.facebook.com/GoogleJapan/" 
          data-tabs="timeline, events" 
          data-width="500" 
          data-height="" 
          data-small-header="true" 
          data-adapt-container-width="true" 
          data-hide-cover="false" 
          data-show-facepile="false"
          data-lazy="true">
          <blockquote 
            cite="https://www.facebook.com/GoogleJapan/"
            className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/GoogleJapan/">
                Google
              </a>
          </blockquote>
        </div>
      </div>
    </div>
   );
}
 
export default Facebook;