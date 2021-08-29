import React, {useState} from 'react'
import './Styles/style.scss'

import Logo from './Img/logo.svg'
// Components
import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/Main"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"


function Dashboard(props) {

    return (
        <Main language={props.language} />
    )
}


export default Dashboard
