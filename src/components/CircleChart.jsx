import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "Aptitude", value: 85 },
    { name: "Logical", value: 90 },
    { name: "Analytical", value: 80 },
    { name: "Reasoning", value: 88 },
    { name: "Quantitative", value: 95 },
    { name: "Verbal Reasoning", value: 75 },
    { name: "Abstract Reasoning", value: 82 },
    { name: "Spatial Reasoning", value: 78 },
    { name: "Verbal", value: 78 },
    { name: "Coding", value: 92 },
    { name: "Numerical", value: 70 },
    { name: "Computer", value: 95 },
    
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF"];

export default function CircleChart() {
  return (
    <div className="w-full h-96 p-4 bg-[#10141E] rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Student's Test Performance</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              {/* <Legend layout="horizontal" verticalAlign="bottom" align="center" /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
  )
}
