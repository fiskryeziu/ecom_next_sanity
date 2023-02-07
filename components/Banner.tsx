import Image from 'next/image'
import React, { useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Banner = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  return (
    <Carousel
      infiniteLoop={true}
      dynamicHeight={true}
      // interval={1000}
      // autoPlay={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      {[1, 2, 3, 4].map((_, idx) => (
        <div
          key={idx}
          className="flex h-screen justify-center items-center"
          id="anchor"
        >
          <div className="leftBox">
            <p className="text-5xl font-bold text-left">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
              qui esse adipisci consectetur necessitatibus temporibus labore?
              Hic, commodi eum.
            </p>
            <p className="text-3xl font-bold text-left">1,200$</p>
            <button className="px-7 py-3 bg-black text-white">
              View Collection
            </button>
          </div>
          <div className="rightBox">
            <img
              src="https://images.pexels.com/photos/14930425/pexels-photo-14930425.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="hello there"
              ref={imgRef}
              className="rounded-full object-cover w-32"
            />
          </div>
        </div>
      ))}
    </Carousel>
  )
}
export default Banner
