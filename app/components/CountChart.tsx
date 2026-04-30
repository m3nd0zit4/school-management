"use client";
import { MoreHorizontal, Mars, Venus } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FBCFE8",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#BFDBFE",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <MoreHorizontal className="size-5 cursor-pointer text-gray-500" strokeWidth={2} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
          <Mars size={24} className="text-sky-400" aria-label="Boys icon" />
          <Venus size={24} className="text-pink-400" aria-label="Girls icon" />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-200" />
            1,234
          </h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-200" />
            1,234
          </h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;