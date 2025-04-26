import React from 'react'
import {NavLink} from 'react-router-dom'
const tests = [
  {
    id: 1,
    name: "Aptitude Basics Test",
    time: "30 mins",
    marks: 50
  },
  {
    id: 2,
    name: "Logical Reasoning Challenge",
    time: "45 mins",
    marks: 60
  },
  {
    id: 3,
    name: "Quantitative Aptitude Level 1",
    time: "40 mins",
    marks: 55
  },
  {
    id: 4,
    name: "Verbal Ability Test",
    time: "25 mins",
    marks: 40
  },
  {
    id: 5,
    name: "General Awareness Quiz",
    time: "20 mins",
    marks: 30
  },
  {
    id: 6,
    name: "Advanced Math Test",
    time: "60 mins",
    marks: 100
  },
  {
    id: 7,
    name: "Coding Fundamentals",
    time: "45 mins",
    marks: 80
  },
  {
    id: 8,
    name: "Data Interpretation & Analysis",
    time: "35 mins",
    marks: 50
  },
  {
    id: 9,
    name: "Mock Placement Test",
    time: "90 mins",
    marks: 120
  },
  {
    id: 10,
    name: "Technical MCQ Test",
    time: "50 mins",
    marks: 70
  }
];

const Tests = () => {
  return (
    <div className='h-full w-full flex gap-5 flex-wrap items-center '>
        {tests.map((test,idx)=>{
          return (
            <NavLink 
                state={{ //TODO: state is used for send the props in NavLink
                  testname: test.name,
                  time: test.time,
                  marks: test.marks,
                }}
             to="/dashboard/tests/terms-conditions" key={idx} className='w-[18vw] h-[18vw] bg-slate-600 flex items-center justify-center flex-col  rounded-md hover:scale-105 duration-75'>
                <h1 className='text-2xl font-bold text-center'>{test.name}</h1> 
                <h2>time : {test.time}</h2>
                <h2>marks : 0/{test.marks}</h2>
            </NavLink >
          )
        })}
    </div>
  )
}

export default Tests