import React, {useState} from 'react'
import StudentMark from "../StudentMark/StudentMark"
import './StudentsCard.scss'
// Icons
import Avatar from '../../Img/Avatars/Avatar.svg'
import Avatar1 from '../../Img/Avatars/Avatar-1.svg'
import Avatar2 from '../../Img/Avatars/Avatar-2.svg'
import Avatar3 from '../../Img/Avatars/Avatar-3.svg'
import Avatar4 from '../../Img/Avatars/Avatar-4.svg'
import Avatar5 from '../../Img/Avatars/Avatar-5.svg'
import Avatar6 from '../../Img/Avatars/Avatar-6.svg'
// Components
import Dropdown from "../Dropdown/Dropdown"

export default function StudentsCard(props) {
    let content = {
        English: {
            student1: "Utkirova Nigina",
            student2: "Nurmatjonov Javokhir",
            student3: "Nurmatjonov Mavlonbek",
            student4: "Olimjonov Ibrokhim",
            student5: "Kasimkhanova Laylo",
            student6: "Davranova Diyora",
            student7: "Fayziyev Ibrokhim",
            student8: "Mirjalalov Miraziz",
        },
        Uzbek: {
            student1: "O'tkirova Nigina",
            student2: "Nurmatjonov Javohir",
            student3: "Nurmatjonov Mavlonbek",
            student4: "Olimjonov Ibrohim",
            student5: "Qosimxonova Laylo",
            student6: "Davronova Diyora",
            student7: "Fayziyev Iborhim",
            student8: "Mirjalolov Miraziz",
        }
    }
    const [active, setActive] = useState("")
    function dropdown(){
        setActive(active+"active")
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)
    return(
        <div className="students-card" data-aos="fade-right">
            <div className="students-card__top">
                <h3 className="students-card__title">
                    {props.studentsTitle}
                </h3>
                <Dropdown />
            </div>
            <hr/>
            <div className="students-card__bottom">
                <ul className="students-list">
                    <StudentMark studentImg={Avatar}
                                 studentName={content.student1}
                                 studentMark={9.3} />
                    <StudentMark studentImg={Avatar1}
                                 studentName={content.student2}
                                 studentMark={8.9} />
                    <StudentMark studentImg={Avatar2}
                                 studentName={content.student3}
                                 studentMark={8.7} />
                    <StudentMark studentImg={Avatar3}
                                 studentName={content.student4}
                                 studentMark={8.2} />
                    <StudentMark studentImg={Avatar4}
                                 studentName={content.student5}
                                 studentMark={8.2} />
                    <StudentMark studentImg={Avatar5}
                                 studentName={content.student6}
                                 studentMark={8.1} />
                    <StudentMark studentImg={Avatar6}
                                 studentName={content.student7}
                                 studentMark={7.9} />
                    <StudentMark studentImg={Avatar1}
                                 studentName={content.student8}
                                 studentMark={7.5} />
                </ul>
            </div>
        </div>
    )
}