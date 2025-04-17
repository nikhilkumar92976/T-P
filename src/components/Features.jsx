import React from 'react'
import practice from '../assets/bestpractice.webp'
import { Link } from 'react-router-dom'

function Features() {
  return (
    <div className='relative w-full h-[70vh] '>
        <h1 className='text-5xl font-bold ml-[40%]'>Features  <span className='text-[#515DB1]'>offered.</span></h1>
        <div className='flex justify-evenly  pt-[2vw]'>
              {/* card 1 */}
            <div className='card w-[22vw] h-[27vw] bg-[#1C2029] rounded-md hover:scale-110 duration-100'>
                    <img src={practice} alt="" className='bg-transparent h-[12vw] w-full rounded-b-md'/>
                    <h1 className='text-3xl font-semibold mt-2 ml-6'>Aptitude Test</h1>
                    <p className='text-slate-300 ml-6'>1. Topic-wise Tests.</p>
                    <p className='text-slate-300 ml-6'>2. Performance Analysis.</p>
                    <p className='text-slate-300 ml-6'>3. Timed Quizzes.</p>
                    <p className='text-slate-300 ml-6'>4. Progress Tracking. <span className='text-blue-600'>...more</span></p>
                    <Link to="/login" className="px-4 py-2 w-[8vw] mt-2 ml-[6vw] bg-[#515DB1] text-md rounded-3xl mr-2 hover:bg-[#0c0f16f3] flex gap-2 justify-center items-center">Join Now
                    </Link>
            </div>
            {/* card 2 */}
            <div className='card w-[22vw] h-[27vw] bg-[#1C2029] hover:scale-110 duration-100'>

            </div>
            {/* card 3 */}
            <div className='card w-[22vw] h-[27vw] bg-[#1C2029] hover:scale-110 duration-100'>

            </div>
        </div>
    </div>
  )
}

export default Features
