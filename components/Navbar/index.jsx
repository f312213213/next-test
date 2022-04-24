import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
      <nav className={'w-full p-4 absolute flex justify-around bg-custom-800 text-white'}>
        <Link href={'/'} replace>
          HOME
        </Link>
        <Link href={'/sports'} replace>
          SPORTS
        </Link>
        <Link href={'/login'} replace>
          LOGIN
        </Link>
      </nav>
  )
}

export default Navbar
