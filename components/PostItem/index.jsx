import React from 'react'
import Link from 'next/link'

const PostItem = ({ post }) => {
  return (
      <Link href={`/posts/${post.id}`} replace>
        <div className={'border border-indigo-200 rounded-lg w-full p-4 cursor-pointer h-60'}>
          <h1 className={'text-2xl text-ellipsis overflow-hidden whitespace-nowrap'}>{post.title}</h1>
          <p className={'mt-4'}>{post.body}</p>
        </div>
      </Link>
  )
}

export default PostItem
