import React from 'react'

import Meta from '../../../../../components/Meta'
import CandidateCard from '../../../../../components/CandidateCard'

const VoteAllPage = ({ candidates }) => {
  return (
      <>
        <Meta title={'分區 | 北大明星賽 2022'} description={'分區'} />
        <div className={'w-full pb-5 bg-custom-500 dark:bg-custom-900 transition'}>
          <div className={'w-full flex justify-center items-center my-4'}>
            <div className={'w-3/5 md:w-2/5 flex-col'}>
              <h1 className={'m-4 text-center dark:text-custom-200 w-full text-sm'}>
                這個分區是：<span className={'bg-white p-2 dark:text-custom-900'}>測試</span>
              </h1>
              {
                candidates.documents.map((candidate) => (
                    <CandidateCard
                        key={candidate.name.slice(-20)}
                        path={candidate.name.replace('projects/ntpu-all-star/databases/(default)/documents/', '')}
                        candidate={candidate.fields}
                    />
                ))
              }
            </div>
          </div>
        </div>
      </>
  )
}

export const getServerSideProps = async (context) => {
  const { sport, gender, place } = context.params
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/ntpu-all-star/databases/(default)/documents/${sport}/${gender}/${place}`)
  const candidates = await response.json()
  return {
    props: { candidates }
  }
}

export default VoteAllPage
