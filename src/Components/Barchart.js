import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import data from "../Data/BarchartData.json";
class Barchart extends Component {
  render() {
    return (

      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          // width={800}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 5,
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
      </ResponsiveContainer>

    );
  }
}

export default Barchart;
