import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  // Raw Ratings & Contest Info
  const rawData = [
    { date: "May 01", rating: 1350, rank: 10000, solved: 3 },
    { date: "Jun 02", rating: 1367, rank: 19961, solved: 1 },
    { date: "Jul 01", rating: 1368, rank: 17000, solved: 2 },
    { date: "Aug 05", rating: 1366, rank: 21000, solved: 2 },
    { date: "Sep 01", rating: 1380, rank: 16000, solved: 3 },
    { date: "Oct 10", rating: 1355, rank: 22000, solved: 1 },
    { date: "Nov 02", rating: 1360, rank: 20000, solved: 2 },
    { date: "Oct 10", rating: 1355, rank: 22000, solved: 1 },
    { date: "Nov 02", rating: 1360, rank: 20000, solved: 2 },
    { date: "Oct 10", rating: 1355, rank: 22000, solved: 1 },
  
    { date: "Jun 02", rating: 1367, rank: 19961, solved: 1 },
    { date: "Jul 01", rating: 1368, rank: 17000, solved: 2 },
    { date: "May 01", rating: 1350, rank: 10000, solved: 3 },
    { date: "Jun 02", rating: 1367, rank: 19961, solved: 1 },
  ];
  
  const baseRating = rawData[0].rating;
  const chartData = rawData.map((item) => ({
    ...item,
    ratingChange: item.rating - baseRating,
  }));
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { rating, rank, solved } = payload[0].payload;
      return (
        <div className="bg-[#262d3d]  text-white p-2 rounded-md shadow-md text-sm">
          <p><strong>{label}</strong></p>
          <p>Rating: {rating}</p>
          <p>Rank: {rank.toLocaleString()}</p>
          <p>Solved: {solved} / 10</p>
        </div>
      );
    }
    return null;
  };
function Graph() {
  return (
    <div className="w-full  max-w-4xl mx-auto bg-[#10141E] p-4 rounded-xl shadow-lg">
    <h2 className="text-white text-xl font-bold mb-4 text-center">
      Rating Progress Over Time
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="date" stroke="#ccc" />
        <YAxis stroke="#ccc" label={{ value: "Net Rating Change", angle: -90, position: "insideLeft" }} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="ratingChange"
          stroke="#facc15"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Graph
