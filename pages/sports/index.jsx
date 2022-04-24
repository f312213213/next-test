import React from 'react'

import Meta from '../../components/Meta'
import SportType from '../../components/SportType/SportType'

const Sports = () => {
  return (
      <>
        <Meta title={'選擇球類 | 北大明星賽 2022'} description={'選擇要投的球類'} />
        <div className={'h-96 w-2/3 rounded flex flex-col justify-evenly overflow-hidden divide-y divide-gray-500 bg-custom-200'}>
          <SportType type={'男籃'} path={'basketball/male/candidates'} />
          <SportType type={'女籃'} path={'basketball/female/candidates'} />
          <SportType type={'男排-舉球員'} path={'volleyball/male/setter'} />
          <SportType type={'男排-自由球員'} path={'volleyball/male/libero'} />
          <SportType type={'男排-中間手'} path={'volleyball/male/spiker'} />
          <SportType type={'男排-邊線攻擊手'} path={'volleyball/male/edgeline'} />
          <SportType type={'女排-舉球員'} path={'volleyball/female/setter'} />
          <SportType type={'女排-邊線攻擊手'} path={'volleyball/female/edgeline'} />
        </div>
      </>
  )
}

export default Sports
