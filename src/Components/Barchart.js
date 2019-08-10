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
class Barchart extends Component {
  yAxisValue = () => {
    return this.props.barchartData
      ? this.props.barchartData
      : [
          { name: "calls", calls: 0, am: 2400 },
          { name: "messages", calls: 0, am: 2400 }
        ];
  };
  render() {
    const data = this.yAxisValue();
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
          <YAxis type="number" domain={[0, "dataMax"]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="messages" fill="#D13830" />
          <Bar dataKey="calls" fill="#3F3F3F" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Barchart;
