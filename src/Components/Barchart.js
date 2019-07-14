import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import data from "../Data/BarchartData.json";
class Barchart extends Component {
  render() {
    return (
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="messages" fill="#8884d8" />
        <Bar dataKey="calls" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Barchart;
