import { urlFor } from '@/lib/client'
import { IBanner } from '@/typings'
import Image from 'next/image'
import React, { useRef } from 'react'
import useOnMouseMove from '../hooks/useOnMouseMove'

const Carousel = ({ item }: { item: IBanner }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  useOnMouseMove(imgRef)
  return (
    <div
      className="relative flex h-[60vh]  md:h-screen justify-center items-center"
      id="anchor"
    >
      <div
        className="flex flex-col items-start pl-10 md:pl-20 lg:pl-40 gap-6"
        id="drop"
      >
        <p
          id="carouselTitle"
          className="font-bold text-left  md:w-1/2 text-3xl md:text-4xl lg:text-5xl "
          style={{ '--order': 1 } as React.CSSProperties}
        >
          {item.name}
        </p>
        <p
          id="carouselDesc"
          className=" text-left md:w-1/2 text-xs md:text-sm lg:text-base"
          style={{ '--order': 2 } as React.CSSProperties}
        >
          {item.desc}
        </p>
        <p
          id="carouselPrice"
          className="text-3xl font-bold text-left"
          style={{ '--order': 3 } as React.CSSProperties}
        >
          ${item.price}
        </p>
        <button
          id="carouselBtn"
          className="px-5 py-2 md:px-7 md:py-3 bg-black text-white"
          style={{ '--order': 4 } as React.CSSProperties}
        >
          View Collection
        </button>
      </div>

      <Image
        src={urlFor(item.image).url()}
        id="carouselImg"
        alt="watch"
        width={300}
        height={300}
        ref={imgRef}
        className="absolute bottom-6 md:bottom-auto right-4  lg:right-20 rounded-full object-cover w-32  sm:w-60 md:w-72"
        style={{ '--order': 5 } as React.CSSProperties}
      />
    </div>
  )
}

export default Carousel
