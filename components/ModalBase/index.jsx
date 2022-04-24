import React from 'react'
import { useRouter } from 'next/router'
import ModalComponent from './ModalComponent'

const ModalBase = () => {
  const router = useRouter().query

  return (
      <>
        {
          router.uid_m && <ModalComponent />
        }
      </>
  )
}

export default ModalBase
