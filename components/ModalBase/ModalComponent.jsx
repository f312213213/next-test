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

const ModalComponent = () => {
  const [candidate, setCandidate] = React.useState({})
  const router = useRouter()

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
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
      // FIXME
      // 開啟 modal 後會跳到最上面
      <>
        <Meta title={`${candidate.fields?.username?.stringValue} | 北大明星賽 2022`} description={candidate.fields?.introduction?.stringValue} />

        <Modal
            isOpen={!!router.query.uid_m}
            onRequestClose={() => history.back()}
            style={customStyles}
        >
          <div className={'w-full h-full my-2 flex flex-col justify-center items-center py-4 space-y-3'}>
            <h1 className={'text-2xl'}>{candidate.fields?.username.stringValue}</h1>
            <img className={'h-96 w-auto'} src={candidate.fields?.photoLink?.stringValue || candidate.fields?.photoURL?.stringValue} alt={candidate.fields?.introduction?.stringValue} />
            <p className="text-gray-700 text-base text-center">
              { candidate.fields?.introduction.stringValue }
            </p>
          </div>
        </Modal>
      </>
  )
}

export default ModalComponent
