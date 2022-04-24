import React from 'react'

const Layout = ({ children }) => {
  return (
      <div className={'w-full min-h-screen pt-14 pb-4 px-8 flex justify-center items-center'}>
        {children}
      </div>
  )
}

export default Layout
