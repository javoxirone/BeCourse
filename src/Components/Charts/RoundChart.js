import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: "20 o'quvchilardan iborat sinf", value: 32 },
    { name: "10 o'quvchilardan iborat sinf", value: 32 },
    { name: "5 o'quvchilardan iborat sinf", value: 24 },
    { name: 'Individual darslar', value: 12 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={150}
                    cy={130}
                    innerRadius={100}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >

                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        );
    }
}
