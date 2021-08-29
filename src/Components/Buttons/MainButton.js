import React from 'react'
import './button.scss'

export default function MainButton(props) {
    return (
        <a href="#" className="main-btn">
            <props.icon style={{ fontSize: props.fontSize }} className="main-btn__icon" />
            {props.text}
        </a>
    )
}