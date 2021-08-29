import React, {useState} from 'react'
import './StudentMark.scss'
export default function StudentMark(props) {
    // const [count, setCount] = useState([props.studentMark])
    // console.log(count)

    return (
        <li className="students-item">
            <div className="item__start">
                <img src={props.studentImg} alt=""/>
                <span className="item__name">{props.studentName}</span>
            </div>
            <span className="item__mark">{props.studentMark}</span>
        </li>
    )
}