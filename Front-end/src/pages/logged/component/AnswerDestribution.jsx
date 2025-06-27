import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const AnswerDestribution = () => {
    const distributionData = [
    { name: "Correct", value: 75, color: "#10B981" },
    { name: "Incorrect", value: 20, color: "#EF4444" },
    { name: "Unattempted", value: 5, color: "#6B7280" },
  ];    
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Answer Distribution
      </h3>
      <div className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center space-x-6 mt-4">
        {distributionData.map((item) => (
          <div key={item.name} className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full mr-2`}
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-600">
              {item.name}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerDestribution;
