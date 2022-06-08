import '../styles/globals.css'
// import { imageOptimizer } from 'next/dist/server/image-optimizer';
// import 'tailwindcss/tailwind.css'





function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    getLayout(<Component {...pageProps} />)
  )
}

export default MyApp
