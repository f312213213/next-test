import React from 'react'
import Link from 'next/link'

const CandidateCard = ({ candidate, path, routerParams, name }) => {
  return (
      <div className={'w-full h-96 rounded flex flex-col items-center shadow-lg bg-custom-200 dark:bg-custom-400 transition relative'}>
         <img className={'h-1/2'} src={candidate.photoLink?.stringValue || candidate.photoURL?.stringValue} alt={candidate.introduction.stringValue} />
        <div className={'p-2 flex flex-col items-center'}>
          <div className={'font-bold text-xl'}>{candidate.username.stringValue}</div>
          <p className={'text-gray-700 text-base text-center'}>
            {candidate.introduction.stringValue.length > 70 ? candidate.introduction.stringValue.substring(0, 70) + '...' : candidate.introduction.stringValue }
          </p>
        </div>
        <div className={'px-6 flex justify-evenly items-center space-x-4 absolute bottom-4 mt-1'}>
          <div>
            目前票數：{candidate.voteCount.integerValue}
          </div>
          <Link
              href={`/sports/[sport]/[gender]/[place]/?sport=${routerParams.sport}&gender=${routerParams.gender}&place=${routerParams.place}&uid_m=${name}`}
              as={`/sports/${path}`}
              scroll={false}
          >
            <a className={'bg-custom-500 p-2 rounded hover:bg-custom-700 transition'}>
              個人頁面
            </a>
          </Link>
        </div>
      </div>
  )
}

export default CandidateCard
