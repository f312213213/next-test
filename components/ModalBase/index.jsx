import React from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import Meta from '../Meta'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    overflow: 'hidden'
  }
}

const ModalBase = () => {
  const [candidate, setCandidate] = React.useState({})
  const router = useRouter()
  const outRef = React.useRef()

  React.useEffect(() => {
    const getCandidateData = async () => {
      const response = await fetch(`https://firestore.googleapis.com/v1/projects/ntpu-all-star/databases/(default)/documents/${router.query.sport}/${router.query.gender}/${router.query.place}/${router.query.uid_m}`)
      const candidate = await response.json()
      setCandidate(candidate)
    }
    if (router.query.uid_m) {
      getCandidateData()
    }
  }, [router.query.uid_m])

  React.useEffect(() => {
    if (router.query.uid_m) { document.body.style.overflow = 'hidden' }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [router.query.uid_m])

  React.useEffect(() => {
    if (router.query.uid_m) {
      window.addEventListener('keydown', handleClose)
    }
    return () => {
      window.removeEventListener('keydown', handleClose)
    }
  }, [router.query.uid_m])

  const handleClose = (e) => {
    if (e.target === outRef.current || e.key === 'Escape') {
      router.push(`/sports/${router.query.sport}/${router.query.gender}/${router.query.place}`, undefined, { scroll: false })
    }
  }

  return (
      <>
        {
          router.query.uid_m &&
            <>
              <Meta title={`${candidate.fields?.username?.stringValue ?? ''} | 北大明星賽 2022`} description={candidate.fields?.introduction?.stringValue ?? ''}/>

              <div className={'fixed w-full h-screen bg-gray-400 z-50 bg-opacity-80 flex justify-center items-center py-4'} ref={outRef} onClick={handleClose} >
                <div className={'flex flex-col justify-center items-center space-y-3 bg-white w-8/12 rounded-xl md:rounded-none md:w-3/5 md:h-screen p-4 overflow-y-auto'}>
                  <h1 className={'text-xl'}>{candidate.fields?.username.stringValue}</h1>
                  <img className={'h-48 md:h-96 w-auto'} src={candidate.fields?.photoLink?.stringValue || candidate.fields?.photoURL?.stringValue} alt={candidate.fields?.introduction?.stringValue} />
                  <p className="text-gray-700 text-sm text-center">
                    { candidate.fields?.introduction.stringValue }
                  </p>
                </div>
              </div>
            </>
        }

      </>
  )
}

export default ModalBase
