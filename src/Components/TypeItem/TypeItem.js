import React from 'react'
import './TypeItem.scss'

export default function TypeItem(props) {
    return(
        <li className="list-item">
            <div className="item__start">
                <span className="dot" style={{backgroundColor: props.dotColor}}></span>
                <span className="item__title">
                    {props.itemTitle}
                </span>
            </div>
            <div className="item__numbers">
                {props.itemNumber}
                <span className="percent">{props.per}</span>
            </div>
        </li>
    )
}