import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const SinglePost = ({ post }) => {
  const { id } = useRouter().query
  return (
      <>
        <Head>
          <title>{post.title}</title>
          <meta property="og:title" content={post.title} key="title" />
          <meta name="description" content={`Post wrote by ${post.id}.`} />
        </Head>
        <div>
          {post.body}
        </div>
      </>
  )
}

export const getStaticProps = async (context) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const post = await response.json()
  return {
    props: { post }
  }
}

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  const ids = posts.map((post) => post.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: false
  }
}

export default SinglePost
