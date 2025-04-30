import React from 'react'
import {useLocation} from 'react-router-dom'
import { PiStudentFill } from "react-icons/pi";
import { useState } from 'react';
import {useNavigate,NavLink} from 'react-router-dom'
function TermsConditions() {
  //TODO : useLocation used to accept the NavLink props data from the previous page
  const location = useLocation();
  const { testname, time, marks } = location.state || {};
  console.log(testname, time, marks) 

  const[isChecked, setIsChecked] = useState(false);
  console.log(isChecked)

  const navigate = useNavigate();
  
  return (
    <div className='h-screen w-screen   bg-white text-black'>
      {/* nav Bar */}
       <div className="w-screen h-14 px-8 border-b  border-gray-400 shadow-md  flex items-center sticky top-0 bg-white z-50">
              <PiStudentFill className="text-3xl text-blue-600 " />  
              <h1 className='text-2xl font-bold'>NextStep</h1>
        </div>


      <div className="w-full flex flex-col items-center gap-5 p-4 px-8">
          <h1 className='text-4xl font-bold'>IES NEXTSTEP : {testname}</h1>
          <div className='flex w-full justify-between mt-4 '>
            <p>Duration: {time}</p>
            <p>Maximum Marks : {marks}</p>
          </div>
          <div className='w-full text-xl '>
              <p className='font-bold'>Read the following instructions carefully. </p>
              <div>
                <ol className='list-decimal list-inside'>
                  <li>All questions are compulsory.</li>
                  <li>There is no negative marking.</li>
                  <li>Use of calculator is not allowed.</li>
                  <li>Use of mobile phone is strictly prohibited.</li>
                  <li>Do not leave the exam page until you have completed the test.</li>
                  <li>In case of any technical issues, please contact the support team.</li>
                  <li>6. Once you start the test, you will not be allowed to reattempt it. Make sure that you complete the test before you submit the test and/or close the browser. </li>
                </ol>
              </div>
          </div>

         <hr className='w-full mt-4 '/>
        <div className='w-full  '>
            <p className='text-xl'>Decletation :</p>
            <input type="checkbox" onClick={()=>setIsChecked(!isChecked)}  className='-5 w-5 accent-blue-500 bg-white checked:bg-white rounded border border-gray-300' /> I have read all the instructions carefully and have understood them. I agree not to cheat or use unfair means in this examination. I understand that using unfair means of any sort for my own or someone else's advantage will lead to my immediate disqualification. The decision of Testbook.com will be final in these matters and cannot be appealed. 
            
            <hr className='w-full mt-1 '/>
            <div className='w-full mt-3 px-6 flex gap-[40%]'>
              <button onClick={()=>navigate(-1)} className='py-2 px-3  bg-blue-600 text-white rounded hover:bg-blue-700'>Previous</button>

                <NavLink  
                    onClick={(e) => {
                      if (!isChecked) {
                        e.preventDefault(); // Prevent navigation if checkbox is not checked
                      }
                    }}
                    to="/dashboard/tests/questions" 
                    className={`px-3 py-2 ${isChecked? ' bg-blue-600 text-white rounded hover:bg-blue-700' : 'bg-slate-300 text-slate-400'} text-white rounded-md`}>I am ready to begin</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions

