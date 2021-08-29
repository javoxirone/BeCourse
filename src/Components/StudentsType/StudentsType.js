import React from 'react'
import './StudentsType.scss'
// Icons
// Components
import RoundChart from '../Charts/RoundChart'
import TypeItem from "../TypeItem/TypeItem";
export default function StudentsType(props) {
    let content = {
        English: {
            type1: "Groups of 20 students",
            type2: "Groups of 10 students",
            type3: "Groups of 5 students",
            type4: "Individual sessions",
        },
        Uzbek: {
            type1: "20 o'quvchilardan iborat sinf",
            type2: "10 o'quvchilardan iborat sinf",
            type3: "5 o'quvchilardan iborat sinf",
            type4: "Individual darslar",
        }
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)
    return(
        <div className="students-type" data-aos="fade-left" >
            <div className="students-type__top">
                <h3 className="students-type__title">
                    {props.title}
                </h3>
            </div>
            <hr/>
            <div className="students-type__bottom">
                <RoundChart />
                <ul className="type-list">
                    <TypeItem dotColor="#0088FE"
                              itemTitle={content.type1}
                              itemNumber={20}
                              per="(32%)" />

                    <TypeItem dotColor="#00C49F"
                              itemTitle={content.type2}
                              itemNumber={20}
                              per="(32%)" />

                    <TypeItem dotColor="#FFBB28"
                              itemTitle={content.type3}
                              itemNumber={15}
                              per="(24%)" />

                    <TypeItem dotColor="#FF8042"
                              itemTitle={content.type4}
                              itemNumber={7}
                              per="(12%)" />
                </ul>
            </div>
        </div>
    )
}