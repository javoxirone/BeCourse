import React from 'react'
import './ServiceCard.scss'
import MainButton2 from "../Buttons/MainButton2";
import ArrowRightAltTwoToneIcon from "@material-ui/icons/ArrowRightAltTwoTone";
export default function ServiceCard(props) {
    return(
        <div className="card">
            <props.icon className="card__icon" />
            <div className="card__title">
                {props.title}
            </div>
            <p className="card__text">
                {props.text}
            </p>
            <MainButton2 icon={ArrowRightAltTwoToneIcon} text={props.cardBtn} />
        </div>
    )
}