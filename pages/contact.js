import Layout from '../components/Layout/layout'
import { getAllCompanyData } from '../lib/getCompanyData';


const Contact = ({ getCompanyData }) => {
  console.log(getCompanyData);
  const SERVERURL = "http://127.0.0.1:8000/";
  return (
    <div className='px-4 mt-6 sm:px-[10%] sm:mt-12'>
      <div className='mt-6 sm:mt-12'>
        <form noValidate>
          <div>
            <label htmlFor='email' className='text-xl'>メールアドレス</label>
            <input id="email" name="email" type={'email'} className='w-full p-2 border-2 rounded-sm' placeholder="name@example.com"/>
          </div>
          <div id="secTA_select" className=''>
            <label htmlFor="request_custom_fields" className='text-xl'>お問い合わせ種別</label>
            <input id="request_custom_fields" type="hidden" name="custom_fields"  autoComplete="off" data-tagger="" aria-required="true" value=""/>
            </div>
          <div>
            <label></label>
          </div>
          <div>
            <label htmlFor='subject' className='text-xl'>件名</label>
            <input id="subject" name="subject" type="text" className='w-full p-2 border-2 rounded-sm' value="" maxLength="150" aria-required="true" aria-describedby="request_subject_hint" aria-labelledby="request_subject_label"></input>
          </div>
          <div>
            <label htmlFor='main_message' className='text-xl'>本文</label>
            <textarea id='main_message' name='main_message' className='w-full p-2 border-2 rounded-sm' aria-required='true' aria-describedby='main_message_hint' aria-labelledby='main_message_label'></textarea>
          </div>
        </form>
          <button onClick={postUser}>submit</button>
      </div>
      <div className='mt-6 sm:mt-12'>
        <h2>株式会社今庄青果</h2>
        
      </div>
    </div> 
   );
}
 
export default Contact;

export async function postUser() {
  const SERVERURL = "http://127.0.0.1:8000/api/send-email-user/";
  const email = document.getElementById('email').value;
  console.log(new Date());
  
  await fetch(SERVERURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    data : {
      "email": email,
    }
  }).then((data) => {
    console.log(data);
  }).catch(()=> {
    console.log("no");
  })
}

export async function getStaticProps() {
  const getCompanyData = await getAllCompanyData();
  return {
    props: { getCompanyData },
    revalidate: 3,
  };
}


Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}