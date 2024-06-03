import React from 'react'
import { useSwiper } from 'swiper/react'
import { SlArrowLeftCircle, SlArrowRightCircle  } from "react-icons/sl";


export const SwipperNavButons = () => {
    const Swipper = useSwiper();

  return (
    <div className='row'>
        <div className="col m-2 pb-3">
        <button onClick={()=> Swipper.slidePrev()} className='btn-swipper-nav'><SlArrowLeftCircle/></button>
        <button onClick={()=> Swipper.slideNext()} className='btn-swipper-nav'><SlArrowRightCircle/></button>
       
        </div>
    </div>
  )
}
