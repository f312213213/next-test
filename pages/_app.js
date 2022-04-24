import React from 'react'
import '../styles/globals.css'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModalBase from '../components/ModalBase'

function CrashNext ({ Component, pageProps }) {
  return (
      <React.StrictMode>
        <Navbar />
        <ModalBase />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </React.StrictMode>
  )
}

export default CrashNext
