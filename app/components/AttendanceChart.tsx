"use client";
import { MoreHorizontal } from "lucide-react";
import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40
  },
  {
    name: "Tue",
    present: 50,
    absent: 50
  },
  {
    name: "Wed",
    present: 40,
    absent: 60
  },
  {
    name: "Thu",
    present: 30,
    absent: 70
  },
  {
    name: "Fri",
    present: 20,
    absent: 80
  },
  {
    name: "Sat",
    present: 10,
    absent: 90
  }
]

const AttendanceChart = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <MoreHorizontal className="size-5 cursor-pointer text-gray-500" strokeWidth={2} />
      </div>
      <div className="mt-4 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            name="Present"
            fill="#B5FF9E"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            name="Absent"
            fill="#FF9885"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;