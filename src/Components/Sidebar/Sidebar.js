import React, {useState} from 'react'
import './Sidebar.scss'
// Icons
import FolderTwoToneIcon from '@material-ui/icons/FolderTwoTone'
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone'
import InsertDriveFileTwoToneIcon from '@material-ui/icons/InsertDriveFileTwoTone';
import SettingsIcon from '@material-ui/icons/Settings'

// Components
import Icon from '../Icon/Icon'
import Modal from "../Modal/Modal"
import  {useDarkMode} from "../UseDarkMode/UseDarkMode"
import Toggle from '../Toggle/Toggle'
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "../GlobalStyles/GlobalStyle.js"
import { lightTheme, darkTheme } from "../Theme/Theme"

export default function Sidebar(props) {
    let content = {
        English:{
            colorText: "Grayscale",
            setting1: "Change theme: ",
            setting2: "Change language: ",
            setting3: "Change color filter: ",
            themeText: "Change",
        },
        Uzbek: {
            colorText: "Oq-qora rejim",
            setting1: "Temani o'zgartirish: ",
            setting2: "Tilni o'zgartirish: ",
            setting3: "Imkoniyati cheklanganlar uchun rejim: ",
            themeText: "Temani o'zgartirish",
        }
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)

    // Theme settings (using state, switching theme)
    const [show, setShow] = useState(false)
    const [theme, themeToggler] = useDarkMode()

    const themeMode = theme === 'light' ? lightTheme : darkTheme

    // Select language settings (using state, adding to the local storage...)

    return(
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles/>
        <div className="sidebar" data-aos="fade-right">
            <div className="sidebar__header">
                <div className="sidebar__logo">
                    <img src={props.sidebarLogo} alt="Logo" />
                </div>
                <nav className="sidebar__navbar">
                    <ul className="menu">
                        <li className="menu__link"><a href="#"><Icon icon={FolderTwoToneIcon} iconSize={24} /></a></li>
                        <li className="menu__link active"><a href="#"><Icon icon={DashboardTwoToneIcon} iconSize={24} /></a></li>
                        <li className="menu__link"><a href="#"><Icon icon={EmailTwoToneIcon} iconSize={24} /></a></li>
                        <li className="menu__link"><a href="#"><Icon icon={InsertDriveFileTwoToneIcon} iconSize={24} /></a></li>
                    </ul>
                </nav>
            </div>
            <div className="sidebar__footer">
                <div onClick={() => setShow(true)} className="sidebar__settings">
                    <Icon icon={SettingsIcon} iconSize={24} />
                </div>
            </div>
            <Modal title="Settings" onClose={() => setShow(false)} show={show}>
                <ul style={{
                    "display" : "flex",
                    "justify-content" : "center",
                    "align-items" : "flex-start",
                    "row-gap" : 30,
                    "flex-direction" : "column",
                }}>
                    <li>{content.setting1}<Toggle theme={theme} toggleTheme={themeToggler} text={content.themeText} /></li>
                    <li>{content.setting2}
                        <select
                            className="custom-select"
                            value={props.language}
                            onChange={e => props.handleSetLanguage(e.target.value)}
                        >
                            <option value="English">English</option>
                            <option value="Uzbek">Uzbek</option>
                        </select>
                    </li>
                    <li style={{"display": "flex", "align-items": "center"}}>
                        {content.setting3}
                        <div onClick={props.filterHandler} className="main-btn">{content.colorText}</div>
                    </li>
                </ul>


            </Modal>
        </div>
            </>
        </ThemeProvider>
    )
}