import React from 'react'
import Link from 'next/link'

const PostItem = ({ post }) => {
  return (
      <Link href={`/posts/${post.id}`} replace>
        <div className={'border border-indigo-200 rounded-lg w-full p-4 cursor-pointer'}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
  )
}

export default PostItem
