import Head from '../utils/head'
import Header from '../components/Header'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  
  return (
      <div className=' relative overflow-auto scroll-smooth'>
        <Head title="Al Watania KPIs"/>
        <Header/>
        <Component {...pageProps}   />    
      </div>
  )
  
}


export default MyApp
