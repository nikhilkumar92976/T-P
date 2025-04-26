import React from 'react'
import man5 from '../assets/image5-x.png'
import { Link } from 'react-router-dom'

function Section2() {
  return (
    <div className='w-full relative h-[80vh]  flex '>
      <div className='right w-[40%] h-full flex justify-start items-center'>
            <img src={man5} alt="" className='h-[25vw]' />
      </div>
      <div className='left w-[60%] h-full flex flex-col justify-center '>
           <div className='ml-[14%]'>
                <h1 className='text-5xl font-bold mb-4'>Learn from the Best in<br />  the Industry.</h1>
                <p className='w-[75%]'>From software engineers at top tech companies to seasoned educators and mentors, our panel ensures that every piece of content, test, and resource is tailored to help you succeed in your career. Whether it's mastering core concepts, preparing for placement tests, or cracking interviews — you're learning from the best.</p>
           </div>
           <Link to="/login" className="px-4 py-2 w-[10vw] ml-[8vw] mt-6 bg-[#10141E] text-md rounded-3xl mr-2 hover:bg-[#0c0f16f3] flex justify-center items-center">Start Learning
             </Link>
             
      </div>
    </div>
  )
}

export default Section2