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
import { IBanner } from '@/typings'

const Banner = ({ data }: { data: IBanner[] }) => {
  return (
    <Swiper
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
    >
      {data.map((item) => (
        <SwiperSlide key={item._id} id="slider">
          <Carousel item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Banner
