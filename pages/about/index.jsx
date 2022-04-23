import React from 'react'
import Head from 'next/head'

function About () {
  return (
      <>
        <Head>
          <title>About Me</title>
          <meta property="og:title" content="About Me" key="title" />
        </Head>
        <div className={'text-xl'}>
          ABOUT
        </div>
      </>
  )
}

export default About
