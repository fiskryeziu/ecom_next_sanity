import Image from 'next/image'
import React from 'react'
import iwc from '../public/assets/iwc.png'
import omega from '../public/assets/omega.png'
import patek from '../public/assets/pateklogo.png'
import rolex from '../public/assets/rolexlogo.png'
import seiko from '../public/assets/seikologo.png'
import zenith from '../public/assets/zenith.png'

const TopBrands = () => {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <p className="text-2xl font-semibold text-center">Top Brands</p>
      <div className="flex justify-center items-baseline flex-wrap gap-10">
        <div className="w-36 ">
          <Image src={iwc} alt="watch brand" className="object-cover w-full" />
        </div>
        <div className="w-36 ">
          <Image
            src={omega}
            alt="watch brand"
            className="object-cover w-full"
          />
        </div>
        <div className="w-36 ">
          <Image
            src={patek}
            alt="watch brand"
            className="object-cover w-full"
          />
        </div>
        <div className="w-36 ">
          <Image
            src={rolex}
            alt="watch brand"
            className="object-cover w-full"
          />
        </div>
        <div className="w-36 ">
          <Image
            src={seiko}
            alt="watch brand"
            className="object-cover w-full"
          />
        </div>
        <div className="w-36 ">
          <Image
            src={zenith}
            alt="watch brand"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default TopBrands
