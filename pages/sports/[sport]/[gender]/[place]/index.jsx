import React from 'react'

import Meta from '../../../../../components/Meta'
import CandidateCard from '../../../../../components/CandidateCard'

const VoteAllPage = ({ candidates }) => {
  return (
      <>
        <Meta title={'分區 | 北大明星賽 2022'} description={'分區'} />
        <div className={'flex-col'}>
          <h1 className={'m-4 text-center w-full text-sm'}>
            這個分區是：<span className={'bg-white p-2 dark:text-custom-900'}>測試</span>
          </h1>
          <main className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'}>
            {
              candidates.map((candidate) => (
                  <CandidateCard
                      key={candidate.name.slice(-20)}
                      path={candidate.name.replace('projects/ntpu-all-star/databases/(default)/documents/', '')}
                      candidate={candidate.fields}
                  />
              ))
            }
          </main>
        </div>
      </>
  )
}

export const getServerSideProps = async (context) => {
  const { sport, gender, place } = context.params
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/ntpu-all-star/databases/(default)/documents/${sport}/${gender}/${place}`)
  const unsorted = await response.json()
  const candidates = unsorted.documents.sort((a, b) => a.fields.voteCount.integerValue - b.fields.voteCount.integerValue).reverse()
  return {
    props: { candidates }
  }
}

export default VoteAllPage
