import React from 'react'
import Head from 'next/head'
import PostItem from '../../components/PostItem'

function Posts ({ posts }) {
  return (
      <>
        <Head>
          <title>Posts</title>
          <meta property="og:title" content="Posts" key="title" />
          <meta name="description" content="All post can get." />
        </Head>
        <div className={'grid pt-4 grid-cols-4 gap-4'}>
          {
            posts.map((post) => <PostItem key={post.id} post={post}/>)
          }
        </div>
      </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return {
    props: { posts }
  }
}

export default Posts
