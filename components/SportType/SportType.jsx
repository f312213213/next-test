import React from 'react'
import Link from 'next/link'

const SportType = ({ type, path }) => {
  return (
      <Link href={'/sports/[sport]/[gender]/[place]'} as={`/sports/${path}`}>
        <a className={'w-full text-center h-full flex items-center justify-center hover:bg-custom-300 dark:hover:bg-custom-600 transition'}>
          {type}
        </a>
      </Link>

  )
}

export default SportType
