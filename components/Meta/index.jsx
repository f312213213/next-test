import React from 'react'
import Head from 'next/head'

const Meta = ({ title = '首頁 | 北大明星賽 2022', description = '這是北大明星賽投票網站的首頁' }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
      </Head>
  )
}

export default Meta
