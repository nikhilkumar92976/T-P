import React from 'react'
import { SiSpeedtest } from "react-icons/si";
const testResults = [
  { testName: "Aptitude Test 1", testDate: "2025-03-01", timeTaken: 45, accuracy: 82 },
  { testName: "Reasoning Test 1", testDate: "2025-03-03", timeTaken: 50, accuracy: 76 },
  { testName: "Verbal Test 1", testDate: "2025-03-05", timeTaken: 40, accuracy: 90 },
  { testName: "Quant Test 1", testDate: "2025-03-07", timeTaken: 55, accuracy: 85 },
  { testName: "Coding Test 1", testDate: "2025-03-09", timeTaken: 60, accuracy: 72 },
  { testName: "Aptitude Test 2", testDate: "2025-03-11", timeTaken: 48, accuracy: 88 },
  { testName: "Reasoning Test 2", testDate: "2025-03-13", timeTaken: 52, accuracy: 80 },
  { testName: "Verbal Test 2", testDate: "2025-03-15", timeTaken: 43, accuracy: 85 },
  { testName: "Quant Test 2", testDate: "2025-03-17", timeTaken: 50, accuracy: 79 },
  { testName: "Coding Test 2", testDate: "2025-03-19", timeTaken: 62, accuracy: 70 },
  { testName: "Aptitude Test 3", testDate: "2025-03-21", timeTaken: 47, accuracy: 91 },
  { testName: "Reasoning Test 3", testDate: "2025-03-23", timeTaken: 49, accuracy: 74 },
  { testName: "Verbal Test 3", testDate: "2025-03-25", timeTaken: 44, accuracy: 86 },
  { testName: "Quant Test 3", testDate: "2025-03-27", timeTaken: 53, accuracy: 77 },
  { testName: "Coding Test 3", testDate: "2025-03-29", timeTaken: 58, accuracy: 73 },
  { testName: "Aptitude Test 4", testDate: "2025-04-01", timeTaken: 46, accuracy: 83 },
  { testName: "Reasoning Test 4", testDate: "2025-04-03", timeTaken: 51, accuracy: 81 },
  { testName: "Verbal Test 4", testDate: "2025-04-05", timeTaken: 42, accuracy: 89 },
  { testName: "Quant Test 4", testDate: "2025-04-07", timeTaken: 54, accuracy: 80 },
  { testName: "Coding Test 4", testDate: "2025-04-09", timeTaken: 65, accuracy: 75 },
  { testName: "Verbal Test 3", testDate: "2025-03-25", timeTaken: 44, accuracy: 86 },

];
const History = () => {
  return (
    <div className='w-full  p-4'>

      <div className='text-xl px-7 flex uppercase'>
        <div className='w-[30%]'>
          <h1>TestName</h1>
        </div>
        <div className='w-[70%] flex justify-between items-center '>
        <h1>Test-Date</h1>
        <h1>Test-TimeTaken</h1>
        <h1>Test-Accuracy</h1>
        </div>
      </div>

    {testResults.map((ele,idx)=>{
      return <div key={idx} className=' h-[4vw] px-5 hover:bg-[#6556CD] flex  text-[1.1vw]  w-full hover:text-white mt-3 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.4vw]'>
          <div className="w-[30%]">
          <h2 className='flex gap-3'><SiSpeedtest className='mt-1' />{ele.testName}</h2>
          </div>
          <div className='w-[70%] flex justify-between'>
            <h2>{ele.testDate}</h2>
            <h2>{ele.timeTaken}min</h2>
            <h2>{ele.accuracy}%</h2>
          </div>
        </div>
    })}
    </div>
  )
}

export default History