import React from 'react'
import { useRouter } from 'next/router'

import Meta from '@/components/Meta'
import CandidateCard from '@/components/CandidateCard'

const VoteAllPage = ({ candidates }) => {
  const pathName = useRouter().asPath
  const renderPlaceText = () => {
    switch (pathName) {
      case '/sports/volleyball/female/setter': {
        return '女排 - 舉球員'
      }
      case '/sports/volleyball/female/edgeline': {
        return '女排 - 邊線攻擊手'
      }
      case '/sports/volleyball/male/edgeline': {
        return '男排 - 邊線攻擊手'
      }
      case '/sports/volleyball/male/libero': {
        return '男排 - 自由球員'
      }
      case '/sports/volleyball/male/spiker': {
        return '男排 - 中間手'
      }
      case '/sports/volleyball/male/setter': {
        return '男排 - 舉球員'
      }
      case '/sports/basketball/male/candidates': {
        return '男籃'
      }
      case '/sports/basketball/female/candidates': {
        return '女籃'
      }
    }
  }
  const router = useRouter().query

  return (
      <>
        <Meta title={`${renderPlaceText()} | 北大明星賽 2022`} description={`${renderPlaceText()} | 北大明星賽 2022`} />
        <div className={'flex-col min-h-screen'}>
          <h1 className={'m-4 text-center w-full text-sm'}>
            這個分區是：<span className={'bg-white p-2 dark:text-custom-900'}>{renderPlaceText()}</span>
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
