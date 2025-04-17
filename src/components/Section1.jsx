import React from 'react'
import man1 from '../assets/imageMan1-x.png'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <div className='w-full relative h-[80vh]  flex '>
      <div className='left w-[60%] h-full flex flex-col justify-center '>
           <div className='ml-[14%]'>
                <h1 className='text-5xl font-bold mb-4'>Expert Panel: Helping <br /> You Succeed.</h1>
                <p className='w-[75%]'>Our expert panel consists of industry-leading professionals who have come together to create a comprehensive learning platform for aspiring developers and IT professionals. With their vast experience and deep understanding of the technology landscape</p>
           </div>
           <Link to="/login" className="px-4 py-2 w-[10vw] ml-[8vw] mt-6 bg-[#10141E] text-md rounded-3xl mr-2 hover:bg-[#0c0f16f3] flex justify-center items-center">Start Learning
             </Link>
      </div>
      <div className='right w-[40%] h-full flex justify-start items-center'>
            <img src={man1} alt="" className='h-[25vw]' />
      </div>
    </div>
  )
}

export default Section1
