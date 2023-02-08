import Image from 'next/image'
import React, { useRef } from 'react'
import useOnMouseMove from '../hooks/useOnMouseMove'
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay])
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from './Carousel'
import data from '../public/data.json'

//fix on swiper js for mouse events
// For me, just adding this touchStartPreventDefault: false
//  on Swiper options solved my issues with "mousedown" and "mouseup".
const Banner = () => {
  // const imgRef = useRef<HTMLImageElement>(null)
  // useOnMouseMove(imgRef)

  const { items } = data
  return (
    <Swiper
      spaceBetween={50}
      effect={'fade'}
      fadeEffect={{
        crossFade: true,
      }}
      slidesPerView={1}
      modules={[Pagination, EffectFade]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      touchStartPreventDefault={true}
      loop={true}
      autoplay={{ delay: 9000 }}
      draggable={false}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={item.id} id="slider">
          <Carousel item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Banner
