import React from 'react'
import './button.scss'

export default function MainButton2(props) {
    return (
        <a href="#" className="main-btn-2">
            <props.icon className="main-btn-2__icon" style={{ fontSize: props.fontSize }} />
            {props.text}
        </a>
    )
}