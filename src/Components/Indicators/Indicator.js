import React from 'react'
import './indicator.scss'

export default function Indicator(props){
    return (
        <div className="indicator" data-aos={props.animation}>
            <img src={props.indicatorImg} alt="Icon" className="indicator__icon" />
            <div className="indicator__info">
                <h3 className="indicator__title">
                    {props.indicatorTitle} <span className="indicator__per">{props.indicatorPercent}</span>
                </h3>
                <span className="indicator__text">
                    {props.indicatorText}
                </span>
            </div>
        </div>
    )
}