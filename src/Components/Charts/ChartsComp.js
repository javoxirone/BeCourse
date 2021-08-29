import React from 'react'
import Chart from './SimpleChart'
import './chart.scss'

export default function ChartsComp(props) {
    return (
        <div className="students-chart" data-aos="fade-up">
            <div className="students-chart__top">
                <h3 className="chart__title">
                    {props.chartTitle}
                </h3>
            </div>
            <hr />
            <div className="students-chart__bottom">
                <Chart />
            </div>
        </div>
    )
}