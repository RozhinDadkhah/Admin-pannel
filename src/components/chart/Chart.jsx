import React from 'react';
import "./Chart.css";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <div className='secondChart'>
                <ResponsiveContainer width="100%" height="100%" aspect={4}>
                    <LineChart
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
                        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Tooltip />
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}