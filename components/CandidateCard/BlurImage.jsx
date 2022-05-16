import React from 'react'
import Image from 'next/image'

import Loader from '@/public/imgLoader.gif'

const BlurImage = ({ candidate }) => {
  const [isLoading, setLoading] = React.useState(true)
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
      <Image
          className={cn('duration-700 ease-in-out',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          layout={'fill'}
          objectFit={'contain'}
          src={(candidate?.photoURL?.stringValue || candidate?.photoLink?.stringValue) ?? Loader}
          alt={candidate?.introduction.stringValue}
          onLoadingComplete={() => { setLoading(false) }}
      />
  )
}

export default BlurImage
