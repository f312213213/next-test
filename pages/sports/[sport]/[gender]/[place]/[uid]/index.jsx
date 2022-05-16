import React from 'react'
import Image from 'next/image'

import Meta from '@/components/Meta'
import BlurImage from '@/components/CandidateCard/BlurImage'

const SinglePlayer = ({ candidate }) => {
  return (
      <>
        <Meta title={`${candidate.fields.username.stringValue} | 北大明星賽 2022`} description={candidate.fields.introduction.stringValue} needPic={false} />

        <div className={'w-full md:w-10/12 my-2 shadow-xl flex flex-col justify-center items-center py-4 space-y-3 rounded-2xl border-2 border-custom-600'}>
          <h1 className={'text-2xl'}>{candidate.fields.username.stringValue}</h1>
          <div className={'h-96 w-full relative'}>
            <BlurImage candidate={candidate.fields} />
          </div>
          <p className="text-gray-700 text-base text-center p-4">
            { candidate.fields.introduction.stringValue }
          </p>
        </div>
      </>
  )
}

export const getServerSideProps = async (context) => {
  const { sport, gender, place, uid } = context.params
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/ntpu-all-star/databases/(default)/documents/${sport}/${gender}/${place}/${uid}`)
  const candidate = await response.json()
  return {
    props: { candidate }
  }
}

export default SinglePlayer
