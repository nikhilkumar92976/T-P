import React from 'react'
import BannerImage from '../assets/bannerImage.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
function Banner() {
  return (
    <div className='w-full relative h-[80vh]  flex '>
      <div className='left w-[50%] h-full flex flex-col justify-center '>
            <div className='flex items-center justify-center'>
                    <div className='ml-[14%]'>
                        <h1 className='text-5xl font-bold mb-4'>Built for Students. <br />    Designed for <span className='text-[#515DB1]'>Success.</span></h1>
                        <p className='w-[75%]'>Crack Campus Placements with Confidence
                            Sharpen your aptitude, reasoning, and problem-solving skills
                            Your all-in-one platform for placement preparation success.</p>
                    </div>
            </div>
        <div>
            <Link to="/login" className="px-4 py-2 w-[16vw] ml-[7vw] mt-6 bg-[#10141E] text-md rounded-3xl mr-2 hover:bg-[#0c0f16f3] flex gap-2 justify-center items-center">Start Preparetion Now 
                <FaArrowRight />
             </Link>
        </div>
      </div>
      <div className='right h-full leading-none flex justify-end items-center relative w-fit'>
      <div className="absolute inset-0 z-0 bg-blue-400 opacity-60 blur-3xl brightness-140 rounded-md pointer-events-none"></div>

        <img src={BannerImage} alt=""  className="relative z-10 rounded-md shadow-xl" />

      </div>
    </div>
  )
}

export default Banner
