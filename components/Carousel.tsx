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
      <div className="flex flex-col items-start pl-40 gap-6" id="drop">
        <p
          className="text-5xl font-bold text-left w-1/2"
          style={{ '--order': 1 } as React.CSSProperties}
        >
          {item.title}
        </p>
        <p
          className="text-left w-1/2"
          style={{ '--order': 2 } as React.CSSProperties}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo qui
          esse adipisci consectetur necessitatibus temporibus labore? Hic,
          commodi eum.
        </p>
        <p
          className="text-3xl font-bold text-left"
          style={{ '--order': 3 } as React.CSSProperties}
        >
          1,200$
        </p>
        <button
          className="px-7 py-3 bg-black text-white"
          style={{ '--order': 4 } as React.CSSProperties}
        >
          View Collection
        </button>
      </div>
      <Image
        src={item.url}
        alt="watch"
        width={200}
        height={200}
        ref={imgRef}
        className="absolute right-20 rounded-full object-cover w-72 h-72"
        style={{ '--order': 5 } as React.CSSProperties}
      />
    </div>
  )
}

export default Carousel
