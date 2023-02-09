import Image from 'next/image'
import React from 'react'
import menwatch from '../public/assets/formenwatch.png'
import womenwatch from '../public/assets/forwomenwatch.png'

const Watches = () => {
  return (
    <div className="flex flex-col md:flex-row my-10  px-2  sm:px-16 lg:px-20 space-y-6 md:space-y-0">
      <div
        id="glass"
        className="relative flex flex-row items-center justify-between basis-1/2 h-72 pl-4 overflow-hidden"
      >
        <div className="flex flex-col gap-4">
          <p className="text-orange-500 text-sm md:text-xl">From 500$</p>
          <p className="text-xl md:text-3xl font-medium text-slate-500">
            Watches for <span className="text-slate-800">him</span>
          </p>
          <div className="h-[1.4px] w-12 bg-slate-700 mb-2"></div>
          <p className="uppercase text-xs font-medium sm:font-semibold">
            More Details
          </p>
        </div>
        <div>
          <Image
            src={menwatch}
            alt=""
            className="w-28 sm:w-32 md:w-40 lg:w-52 rotate-12"
          />
        </div>
      </div>
      <div
        id="glass"
        className="relative flex flex-row items-center justify-between basis-1/2 h-72 pl-4 overflow-hidden"
      >
        <div className="flex flex-col gap-4">
          <p className="text-orange-500 text-sm md:text-xl">From 500$</p>
          <p className="text-xl md:text-3xl font-medium text-slate-500">
            Watches for <span className="text-slate-800">her</span>
          </p>
          <div className="h-[1.4px] w-12 bg-slate-700 mb-2"></div>
          <p className="uppercase text-xs font-medium sm:font-semibold">
            More Details
          </p>
        </div>
        <div>
          <Image
            src={womenwatch}
            alt=""
            className="w-28 sm:w-32 md:w-40 lg:w-52 rotate-12"
          />
        </div>
      </div>
    </div>
  )
}

export default Watches
