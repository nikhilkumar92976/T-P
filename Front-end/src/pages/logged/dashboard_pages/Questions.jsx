import React, { useState } from 'react'


const questions = [
  {
    question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
    options: ["18", "24", "32", "34"],
  },
  {
    question: "If 5x = 20, what is x?",
    options: ["2", "3", "4", "5"],
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
  },
  {
    question: "Find the odd one out: 2, 3, 5, 7, 11, 13, 15, 17",
    options: ["11", "15", "13", "17"],
  },
  {
    question: "If a train travels 60 km in 1.5 hours, what is its speed?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
  },
  {
    question: "What is 25% of 200?",
    options: ["25", "50", "75", "100"],
  },
  {
    question: "Simplify: (3 + 2) × (4 - 1)",
    options: ["15", "12", "10", "20"],
  },
  {
    question: "A shopkeeper sells an item at ₹240 with 20% profit. What was the cost price?",
    options: ["₹200", "₹220", "₹260", "₹280"],
  },
  {
    question: "The average of 5, 10, 15, 20, 25 is:",
    options: ["10", "15", "20", "25"],
  },
  {
    question: "What comes next in the series: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
  },
];
function Questions() {
  const [currentIndex,setCurrentIndex] = useState(0);
  const [answers,setAnswers] = useState([]);

  //set index to the next question when the button is clicked
  const clickHandler = () => {
      if(currentIndex < questions.length - 1){
        setCurrentIndex(currentIndex + 1)
      }
      else{
        alert("You have reached the end of the questions.")
      }
  }

  //set the answer to the current question when the button is clicked
  const answerHandler = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = answer;
    setAnswers(newAnswers);
    console.log(newAnswers);
  }
  
  return (
    <div className='w-screen h-screen bg-white text-black flex  '>
      <div className='w-[50%] h-screen  p-5 border-r-[1px]'>
          <h1 className='inline-block w-auto text-xl'>Question {currentIndex +1}.</h1>
          <p className='text-xl'>{questions[currentIndex].question}</p>
      </div>
      <div className='w-[50%] h-screen pt-[10%] px-3'>
        {questions[currentIndex].options.map((option,index)=>{
          return(
            <button key={index} onClick={()=>answerHandler(option)} className={`w-full text-left mb-4 px-4 py-2  rounded ${answers[currentIndex] === option ? 'bg-blue-400 text-white'  :'bg-gray-200 hover:bg-gray-300'}'}`} >{option}</button>
          )
        })}
        {
          currentIndex < questions.length - 1 ? (
            <button onClick={clickHandler} className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Next</button>
          ) : (
            //TODO : painding submit the answers to the server
            <button className='t-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Submit</button>
          )
        }
      </div>
    </div>
  )
}

export default Questions

