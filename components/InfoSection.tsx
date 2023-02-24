import Image from 'next/image'
import React from 'react'
import img from '../public/assets/garmin.png'

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden my-20 bg-slate-100 p-2">
      <div className="flex basis-1/2 justify-center">
        <Image src={img} alt="" className="w-52 md:w-96 h-full object-cover" />
      </div>
      <div className="flex flex-col basis-1/2 items-center md:items-start justify-center gap-6">
        <p className="text-4xl font-bold w-3/4 text-slate-800 text-center md:text-left">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="text-slate-500 w-3/4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          velit deserunt eius voluptatem impedit sint.
        </p>
        <button className="bg-slate-900 px-6 py-3 text-white">
          View Collection
        </button>
      </div>
    </div>
  )
}

export default InfoSection
