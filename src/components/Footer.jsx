import React from 'react'
import {Link} from 'react-router-dom'
import { IoDiamondOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className='w-full relative h-[40vh] flex bg-black pt-5'>
        <div className='h-full w-[25%] flex flex-col mt-5 items-center'>
            <IoDiamondOutline className='text-5xl mb-10'/>
            <h1>© 2025 QuizCode, Inc. <br />
            All rights reserved.</h1>
        </div>
        <div className='h-full w-[75%] flex gap-[20%] ml-10'>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-slate-300'>Quick Link</h2>
                    <Link to="/" className=' text-slate-300 mt-3 text-xl'>Home</Link>
                    <Link to="/about" className=' text-slate-300 mt-2 text-xl'>About</Link>
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Quizzes</Link>
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Exams</Link>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-slate-300'>Job Opportunities</h2>
                    <Link to="/" className=' text-slate-300 mt-3 text-xl'>Partner with Us</Link>
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Coding Challenges</Link>
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Contact</Link>
                </div>
                <div  className='flex flex-col'>
                    <h1 className='font-bold text-slate-300'>Connect</h1 >
                    <Link to="/" className=' text-slate-300 mt-3 text-xl'>LinkedIn</Link >
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Twitter</Link >
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Instagram</Link >
                    <Link to="/" className=' text-slate-300 mt-2 text-xl'>Facebook</Link >
                </div>
        </div>
    </div>
  )
}

export default Footer











