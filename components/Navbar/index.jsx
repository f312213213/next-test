import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
      <nav className={'w-full p-4 absolute flex justify-around bg-black text-white'}>
        <Link href={'/'} replace>
          HOME
        </Link>
        <Link href={'/about'} replace>
          ABOUT
        </Link>
      </nav>
  )
}

export default Navbar
