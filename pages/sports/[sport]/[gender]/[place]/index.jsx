import React from 'react'
import { useRouter } from 'next/router'

import Meta from '../../../../../components/Meta'
import CandidateCard from '../../../../../components/CandidateCard'
import ModalBase from '../../../../../components/ModalBase'

const VoteAllPage = ({ candidates }) => {
  const router = useRouter().query
  return (
      <>
        <Meta title={'分區 | 北大明星賽 2022'} description={'分區'} />
        <div className={'flex-col min-h-screen'}>
          <h1 className={'m-4 text-center w-full text-sm'}>
            這個分區是：<span className={'bg-white p-2 dark:text-custom-900'}>測試</span>
          </h1>
          <main className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'}>
            {
              candidates.documents.map((candidate) => (
                  <CandidateCard
                      key={candidate.name.slice(-20)}
                      routerParams={router}
                      name={candidate.name.slice(-20)}
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
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/ntpu-all-star/databases/(default)/documents/${sport}/${gender}/${place}?orderBy=voteCount desc&pageSize=100`)
  const candidates = await response.json()
  return {
    props: { candidates }
  }
}

export default VoteAllPage
