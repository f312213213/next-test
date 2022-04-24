import React from 'react'

import Meta from '../../../../../../components/Meta'

const SinglePlayer = ({ candidate }) => {
  console.log(candidate)
  return (
      <>
        <Meta title={'candidate.fields.username.stringValue | 北大明星賽 2022'} description={candidate.fields.introduction.stringValue} />
        <div>
          {candidate.fields.username.stringValue}
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
