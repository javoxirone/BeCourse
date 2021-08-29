import React, {useEffect, useState} from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search'
import mentor from '../../Img/Avatars/mentor.svg'
import mentor2 from '../../Img/Avatars/Avatar-2.svg'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default function Header(props) {

    let content = {
        English:{
            teacherLiterature: "Olimov Ibrokhim",
            teacherLiteratureJob: "Literature",
            teacherMath: "Salayev Sirojiddin",
            teacherMathJob: "Math & Geometry",
            search: "Search..."
        },
        Uzbek: {
            teacherLiterature: "Olimov Ibrohim",
            teacherLiteratureJob: "Adabiyot",
            teacherMath: "Salayev Sirojiddin",
            teacherMathJob: "Algebra & Geometriya",
            search: "Qidirish..."
        }
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)
    const data = [{id: 0, label: content.teacherLiterature, job: content.teacherLiteratureJob, img: mentor}, {id: 1, label: content.teacherMath, job: content.teacherMathJob, img: mentor2}];
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }

    return (
        <header data-aos="fade-down" className="header">
            <div className="container">
                <div className="header__content">
            <form action="">
                <SearchIcon />
                <input type="search" placeholder={content.search}/>
            </form>
            <div className="header__profile">
                <div className="dropdown">
                    <div className="header__user" style={{cursor: "pointer"}}  onClick={toggleDropdown} >
                        <div className="user__text">
                            <div className="user__name">
                                {selectedItem ? items.find(item => item.id == selectedItem).label : "Olimov Ibrokhim"}
                            </div>
                            <span className="user__job">
                                {selectedItem ? items.find(item => item.id == selectedItem).job : "Literature"}
                            </span>
                        </div>
                        <img src={mentor} alt="Img" />
                        <ExpandMoreIcon className={`icon ${isOpen && "open"}`}/>
                    </div>
                    <div className={`dropdown-body ${isOpen && 'open'}`}>
                        {items.map(item => (
                            <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                                <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="header__notifications">
                    <NotificationsIcon style={{cursor: "pointer"}}/>
                    <ExitToAppIcon  style={{cursor: "pointer"}} />
                </div>

            </div>
            </div>
            </div>
        </header>
    )
}