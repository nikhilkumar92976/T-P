import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { test: "T1", college: 10, batch: 20, branch: 32 },
  { test: "T2", college: 78, batch: 34, branch: 73 },
  { test: "T3", college: 83, batch: 62, branch: 77 },
  { test: "T4", college: 88, batch: 91, branch: 82 },
  { test: "T5", college: 90, batch: 55, branch: 86 },
];

const RankingTrendGraph = () => {
  return (
    <div className=" w-full bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Percentile Trend (College vs Batch vs Branch)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ right: 120 }}>
          <CartesianGrid  strokeDasharray="5 3" horizontal={true} vertical={false} />
          {/* XAxis hidden */}
          {/* <XAxis dataKey="test" /> */}
          <YAxis domain={[10, 100]} tickFormatter={(tick) => `${tick}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="line"
            iconSize={16}
          />
          <Line type="linear" dataKey="college" name="College" stroke="#3b82f6" strokeWidth={2} />
          <Line type="linear" dataKey="batch" name="Batch" stroke="#10b981" strokeWidth={2} />
          <Line type="linear" dataKey="branch" name="Branch" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RankingTrendGraph;
