import React from 'react'
import Link from 'next/link'

const SportType = ({ type, path }) => {
  return (
      <Link href={`sports/${path}`}>
        <button className={'h-16  w-full text-center h-full flex items-center justify-center hover:bg-custom-300 dark:hover:bg-custom-600 hover:text-lg transition'}>
          {type}
        </button>
      </Link>

  )
}

export default SportType
