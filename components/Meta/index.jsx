import React from 'react'
import Head from 'next/head'

import Logo from '../../public/logo.png'

const Meta = ({ title = '首頁 | 北大明星賽 2022', description = '這是北大明星賽投票網站的首頁' }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
        <meta name={'og:image'} content={Logo.src}/>
      </Head>
  )
}

export default Meta
