import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
const Home = () => {
  return (
    <div>
        <div className='w-full h-[91vh] bg-amber-200'>
         <Swiper className='h-full' pagination={true} autoplay={true} modules={[Autoplay,Pagination]}>
            <SwiperSlide className='h-full w-full object-cover'>
                <img className='' src="https://images.unsplash.com/photo-1622480604202-72da86106a1a?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/1094109166/photo/i-love-candy.jpg?s=1024x1024&w=is&k=20&c=xyQRR2Scce-VG_rwF1TFOJAVJAfxs3VTuvmf8sftkbc=" alt="" />
            </SwiperSlide>
        </Swiper>
        
        
       </div>



    </div>
  )
}

export default Home