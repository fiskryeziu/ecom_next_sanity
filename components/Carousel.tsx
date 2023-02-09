import Image from 'next/image'
import React, { useRef } from 'react'
import useOnMouseMove from '../hooks/useOnMouseMove'

interface Iitems {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
const Carousel = ({ item }: { item: Iitems }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  useOnMouseMove(imgRef)
  return (
    <div
      className="relative flex h-screen justify-center items-center"
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
          {item.title.slice(0, 10)}
        </p>
        <p
          id="carouselDesc"
          className=" text-left md:w-1/2 text-xs md:text-sm lg:text-base"
          style={{ '--order': 2 } as React.CSSProperties}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo qui
          esse adipisci consectetur necessitatibus temporibus labore? Hic,
          commodi eum.
        </p>
        <p
          id="carouselPrice"
          className="text-3xl font-bold text-left"
          style={{ '--order': 3 } as React.CSSProperties}
        >
          1,200$
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
        src={item.url}
        id="carouselImg"
        alt="watch"
        width={200}
        height={200}
        ref={imgRef}
        className="absolute bottom-6 md:bottom-auto right-4  lg:right-20 rounded-full object-cover w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72"
        style={{ '--order': 5 } as React.CSSProperties}
      />
    </div>
  )
}

export default Carousel
