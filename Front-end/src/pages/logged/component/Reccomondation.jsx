// import React from "react";

import { Brain } from "lucide-react";

// const Reccomondation = () => {
//   const recommendationItems1 = [
//     {
//       strongLine: "Strengthen your creativity with React",
//       description:
//         "Solve real-world problems involving dynamic, customizable, and logical components. Build interfaces that scale.",
//     },
//     {
//       strongLine: "Master logic building with C++",
//       description:
//         "Sharpen your problem-solving abilities and learn how software communicates at a lower level. Essential for coding interviews.",
//     },
//     {
//       strongLine: "Design beautiful layouts using Tailwind CSS",
//       description:
//         "Learn how to rapidly create responsive, clean, and modern UIs with utility-first CSS.",
//     },
//     {
//       strongLine: "Bring interactivity with JavaScript",
//       description:
//         "JavaScript powers user actions—learn how to handle events, manipulate the DOM, and create engaging web apps.",
//     },
//     {
//       strongLine: "Build powerful backend APIs with Node.js",
//       description:
//         "Understand the server side—create RESTful APIs and handle real-time data using JavaScript everywhere.",
//     },
//   ];
//   const recommendationItems2 = [
//     {
//       strongLine: "Manage data seamlessly with MongoDB",
//       description:
//         "Work with flexible, document-oriented databases that scale easily and pair well with JavaScript stacks.",
//     },
//     {
//       strongLine: "Visualize logic flows with Data Structures",
//       description:
//         "Improve your thinking patterns and prepare for coding rounds by learning trees, graphs, and arrays practically.",
//     },
//     {
//       strongLine: "Secure your skills with Git & GitHub",
//       description:
//         "Collaborate, track changes, and showcase your work. Essential for teamwork and open-source contributions.",
//     },
//     {
//       strongLine: "Level up your logic with Python",
//       description:
//         "Dive into a readable, powerful language used in automation, data science, and AI prototyping.",
//     },
//     {
//       strongLine: "Automate tasks with Linux and Shell",
//       description:
//         "Gain control over systems and automate boring stuff. Knowing shell scripting gives you a serious edge.",
//     },
//   ];

//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="flex flex-wrap gap-6 justify-center">
//         {recommendationItems1.map((val, index) => (
//           <div
//             key={index}
//             className="w-72 h-60 bg-white border border-gray-300 rounded-lg shadow-sm p-5 flex flex-col justify-between"
//           >
//             {/* Optional Icon */}
//             {/* <div className="text-blue-600 mb-2">
//         <SomeLucideIcon size={24} />
//       </div> */}

//             {/* Strong Line */}
//             <h3 className="text-primary-700 text-lg font-semibold leading-snug">
//               {val.strongLine}
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-600 mt-2">{val.description}</p>

//             {/* CTA Button */}
//             <button className="mt-4 w-fit px-4 py-1.5 border border-primary-500 text-primary-600 text-sm rounded-md hover:bg-primary-100 transition">
//               Take test
//             </button>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Reccomondation;

const Reccomondation = () => {
  const recommendationItems1 = [
    {
      strongLine: "Strengthen with React",
      description:
        "Solve real-world problems involving dynamic, customizable, and logical components. Build interfaces that scale.",
    },
    {
      strongLine: "Master building with C++",
      description:
        "Sharpen your problem-solving abilities and learn how software communicates at a lower level.",
    },
    {
      strongLine: "Design using Tailwind CSS",
      description: "Create responsive and modern UIs with utility-first CSS.",
    },
    {
      strongLine: "Bring  with JavaScript",
      description:
        "Handle events, manipulate the DOM, and create engaging apps.",
    },
    {
      strongLine: "backend APIs with Node.js",
      description: "Create RESTful APIs and work with real-time data.",
    },
    {
      strongLine: "Manage data with MongoDB",
      description: "Work with document-oriented databases that scale easily.",
    },
    {
      strongLine: "Visualize logic with DSA",
      description: "Learn trees, graphs, and arrays for interviews.",
    },
    {
      strongLine: "Secure skills Git & GitHub",
      description: "Track changes and collaborate with others.",
    },
    {
      strongLine: "Level up with Python",
      description: "Use Python for automation and AI prototyping.",
    },
    {
      strongLine: "Automate with Linux and Shell",
      description: "Control systems and automate tasks efficiently.",
    },
  ];
  return (
    <div className="overflow-hidden py-6 bg-white">
      <div className=" whitespace-break-spaces flex space-x-6 animate-scroll-x-alternate">
        {recommendationItems1.map((val, index) => (
          <div
            key={index}
            className="w-64 h-44 bg-white border border-gray-300 rounded-lg shadow-sm p-5 flex-shrink-0 flex flex-col justify-between"
          >
            {/* Top: Strong Line */}
            <div className="flex items-center justify-start text-primary-700 text-sm font-normal ">
             <Brain size={14}
             className="mr-2" /> {val.strongLine}
            </div>

            {/* Middle: Description */}
            <p className="mt-2 overflow-hidden text-sm text-primary-500">
              {val.description}
            </p>
            {/* Bottom: Button */}
            <button className="mt-4 px-4 py-1.5 border border-primary-500 text-primary-600 text-sm rounded-md hover:bg-primary-100">
              Take test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reccomondation;
