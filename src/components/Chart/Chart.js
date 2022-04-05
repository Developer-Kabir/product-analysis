import React from "react";
import {
    Area,
    AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Chart.css";

const Chart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 125441,
      revenue: 104501,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 132543,
      revenue: 245500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 192546,
      revenue: 670510,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 162549,
      revenue: 404505,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 185401,
      revenue: 509500,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 197540,
      revenue: 610500,
    },
  ];
  return (
    <div className="chart-container">
      <div className='chart'>
          <h2>Revenue vs sell</h2>
        <LineChart width={580} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment"></YAxis>
          <Line dataKey="revenue" stroke="blue" />
          <Line dataKey="sell" stroke="green"></Line>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </LineChart>
      </div>

      <div className='chart'>
      <h2>Revenue vs sell</h2>
        <BarChart width={600} height={400} data={data}>

        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment"></YAxis>
          <Bar dataKey="revenue" fill="blue" />
          <Bar dataKey="sell" fill="green"></Bar>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </BarChart>
      </div>

      <div className='chart'>
      <h2>Revenue vs sell</h2>
        <PieChart width={400} height={400}>
        <CartesianGrid strokeDasharray="3 3" />
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="blue"
          />
          <Pie
            data={data}
            dataKey="sell"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="green"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>

      <div className='chart'>
      <h2>Revenue vs Sell vs Investment</h2>
        <AreaChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis></YAxis>
            <Area dataKey="revenue" stroke="red" fill="blue"/>
            <Area dataKey="sell" stroke="green" fill="purple"></Area>
            <Area dataKey="investment" stroke="black" fill="indigo"></Area>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </AreaChart>
      </div>
    </div>
  );
};

export default Chart;
