import React, {useState} from 'react'
import './Styles/style.scss'
// Components
import Main from "./Components/Main/Main"


function Dashboard(props) {

    return (
        <Main language={props.language} />
    )
}


export default Dashboard
