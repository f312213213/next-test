import React from 'react'
import '../styles/globals.css'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

function CrashNext ({ Component, pageProps }) {
  return (
      <>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}

export default CrashNext
