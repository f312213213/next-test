import React from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'

import '../styles/nprogress.css'
import '../styles/globals.css'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModalBase from '../components/ModalBase'

function CrashNext ({ Component, pageProps }) {
  const router = useRouter()
  NProgress.configure({ showSpinner: false })

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [router])

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
