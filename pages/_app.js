import Router from 'next/router'
import Pages from '../components/Pages'
import 'nprogress/nprogress.css'
import 'antd/dist/antd.css'
import NProgress from 'nprogress'
import {AuthState} from '../context/acronym/acronymState'

Router.events.on('routeChangeStart',()=>NProgress.start())
Router.events.on('routeChangeComplete',()=>NProgress.done())

function MyApp({ Component, pageProps }) {
  return(
  <AuthState>
  <Pages>
   <Component {...pageProps} />
  </Pages>
  </AuthState>
  )
}

export default MyApp
