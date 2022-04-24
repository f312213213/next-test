import React from 'react'
import Link from 'next/link'

const CandidateCard = ({ candidate, path }) => {
  return (
      <div className="w-full h-96 rounded flex flex-col items-center shadow-lg bg-custom-200 dark:bg-custom-400 transition relative">
        {/* <img className="h-1/2" src={candidate.photoLink?.stringValue || candidate.photoURL?.stringValue} alt={candidate.introduction.stringValue} /> */}
        <div className="p-2 flex flex-col items-center">
          <div className="font-bold text-xl">{candidate.username.stringValue}</div>
          <p className="text-gray-700 text-base text-center">
            {candidate.introduction.stringValue.length > 70 ? candidate.introduction.stringValue.substring(0, 70) + '...' : candidate.introduction.stringValue }
          </p>
        </div>
        <div className="px-6 flex justify-evenly items-center space-x-4 absolute bottom-4">
          <div className={'mt-1'}>
            目前票數：{candidate.voteCount.integerValue}
          </div>
          <Link href={`/sports/${path}`}>
            個人頁面
          </Link>
        </div>
      </div>
  )
}

export default CandidateCard
