import { Analytics } from '@vercel/analytics/react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/header.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
)

export default MyApp
