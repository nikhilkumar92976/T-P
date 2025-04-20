import React from 'react'
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { subYears } from "date-fns";
// npm install date-fns
// npm install react-tooltip@5
// npm install react-calendar-heatmap

const testActivityData = [
  { date: "2024-08-01", count: 1 },
  { date: "2024-08-02", count: 3 },
  { date: "2024-08-03", count: 0 },
  { date: "2024-08-04", count: 2 },
  { date: "2024-08-10", count: 4 },
  { date: "2024-09-01", count: 2 },
  { date: "2024-08-05", count: 1 },
  { date: "2024-09-09", count: 3 },
  { date: "2024-09-23", count: 0 },
  { date: "2024-09-16", count: 2 },
  { date: "2024-09-23", count: 4 },
  { date: "2024-09-25", count: 2 },
  { date: "2024-10-05", count: 1 },
  { date: "2024-10-09", count: 3 },
  { date: "2024-10-23", count: 0 },
  { date: "2024-10-16", count: 2 },
  { date: "2024-10-23", count: 4 },
  { date: "2024-10-25", count: 2 },
  { date: "2024-12-05", count: 1 },
  { date: "2024-12-09", count: 3 },
  { date: "2024-12-23", count: 0 },
  { date: "2024-12-16", count: 2 },
  { date: "2024-12-23", count: 4 },
  { date: "2024-12-25", count: 2 },
];

export default function ConsistencyChart() {
  return (
    <div className="w-full  max-full mx-auto bg-[#10141E]  px-6 pt-4 pb-0  rounded-xl shadow-lg ">
    <h2 className="text-xl font-bold mb-4 text-center">
      Student Test Consistency (Past Year)
    </h2>

    <CalendarHeatmap
      className="h-full"
      startDate={subYears(new Date(), 1)}
      endDate={new Date()}
      values={testActivityData}
      classForValue={(value) => {
        if (!value || value.count === 0) {
          return "color-empty";
        }
        if (value.count <= 1) return "color-scale-1";
        if (value.count <= 3) return "color-scale-2";
        if (value.count <= 5) return "color-scale-3";
        return "color-scale-4";
      }}
      tooltipDataAttrs={(value) => ({
        "data-tooltip-id": "heatmap-tooltip",
        "data-tooltip-content": value.date
          ? `${value.date}: ${value.count} tests`
          : "No test",
      })}
      showWeekdayLabels={true}
    />

    <ReactTooltip id="heatmap-tooltip" />
  </div>
  )
}
