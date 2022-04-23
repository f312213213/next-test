import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
      <>
        <Head>
          <title>Home</title>
          <meta property="og:title" content="Home" key="title" />
          <meta name="description" content="Home page of this web." />
        </Head>
        <div className={'text-xl'}>
          HELLO
        </div>
      </>
  )
}

export default Home
