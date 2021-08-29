import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Yan',
    Applied: 18,
    Left: 16,
    amt: 25,
  },
  {
    name: 'Fev',
    Applied: 15,
    Left: 7,
    amt: 25,
  },
  {
    name: 'Mar',
    Applied: 24,
    Left: 14,
    amt: 25,
  },
  {
    name: 'Apr',
    Applied: 7,
    Left: 6,
    amt: 25,
  },
  {
    name: 'May',
    Applied: 11,
    Left: 7,
    amt: 25,
  },
  {
    name: 'Iyun',
    Applied: 10,
    Left: 5,
    amt: 25,
  },
  {
    name: 'Iyul',
    Applied: 17,
    Left: 15,
    amt: 25,
  },
  {
    name: 'Sen',
    Applied: 19,
    Left: 12,
    amt: 25,
  },
  {
    name: 'Okt',
    Applied: 14,
    Left: 13,
    amt: 25,
  },
  {
    name: 'Noy',
    Applied: 16,
    Left: 8,
    amt: 25,
  },
  {
    name: 'Dek',
    Applied: 23,
    Left: 14,
    amt: 25,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Applied" fill="#6F52ED" background={{ fill: 'transparent' }} barSize={5} className="chart-line" />
          <Bar dataKey="Left" fill="#FF7A00" className="chart-line" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
