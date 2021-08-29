import React, {useState, useEffect} from 'react'
// Styles
import '../../Styles/mixins.scss'
import '../../Styles/variables.scss'
import './main.scss'
// Icons
import Students from "../../Img/icons/Group 1.svg";
import Mark from "../../Img/icons/Group 2.svg";
import Underperfom from "../../Img/icons/Group 3.svg";
import Homework from "../../Img/icons/Group 4.svg";
import Lection from "../../Img/icons/Group 5.svg";
import Clock from "../../Img/icons/Group 6.svg";
import Plus from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
// Components
import MainButton from '../Buttons/MainButton'
import MainButton2 from '../Buttons/MainButton2'
import Indicator from '../Indicators/Indicator'
import ChartsComp from '../Charts/ChartsComp'
import StudentsCard from '../StudentsCard/Students'
import StudentsType from "../StudentsType/StudentsType"
import AOS from 'aos'
import "aos/dist/aos.css"
export default function Main (props) {
    useEffect(() => {
        AOS.init({
            once: true
        });
    })
    let [size, setSize] = useState(0)
    let content = {
        English: {
            title: "Dashboard",
            description:
                "Lesson information",
            btn1: "Manage dashboard",
            btn2: "Create new dashboard",
            indicatorStudents: "Students",
            indicatorMarks: "Average mark",
            indicatorUnderperfoming: "Underperforming students",
            indicatorHomework: "Finished homeworks",
            indicatorLessons: "Lections left",
            indicatorHours: "Hours spent on lections",
            studentsNumberChartTitle: "Students number change per month",
            studentsMarkCardTitle: "Students by average mark",
            studentsTypeChartTitle: "Students by type of studying",


        },
        Uzbek: {
            title: "Bo'shqaruv paneli",
            description:
                "Dars haqida ma'lumot",
            btn1: "Panelni o'zgartirish",
            btn2: "Yangi panel yaratish",
            indicatorStudents: "O'quvchilar",
            indicatorMarks: "O'rtacha baho",
            indicatorUnderperfoming: "Kam ishlovchi o'quvchilar",
            indicatorHomework: "Tugatilgan uy ishilar",
            indicatorLessons: "O'tilgan darslar",
            indicatorHours: "Umumiy darslar soati",
            studentsNumberChartTitle: "O'quvchilarning bir yil davomida davomati",
            studentsMarkCardTitle: "O'quvchilarning baholari",
            studentsTypeChartTitle: "O'quvchilar soni bo'yicha sinflar",


        }
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)
    return(

        <main className="main">
            <div className="container">
                <div className="main__top">
                    <div data-aos="fade-right" className="main__title">
                        <h3>{content.title}</h3>
                        <span>{content.description}</span>
                    </div>
                    <div data-aos="fade-left" className="main__btns">
                        <MainButton2 text={content.btn1} icon={CreateIcon} fontSize={20} />
                        <MainButton text={content.btn2} icon={Plus} fontSize={20} />

                    </div>
                </div>
                <div className="content__top">
                    <Indicator indicatorImg={Students} indicatorTitle="62" indicatorText={content.indicatorStudents} animation="fade-right" />
                    <Indicator indicatorImg={Mark} indicatorTitle="6.8" indicatorText={content.indicatorMarks} animation="fade-left" />
                    <Indicator indicatorImg={Underperfom} indicatorTitle="6.8" indicatorText={content.indicatorUnderperfoming} indicatorPercent="(14%)" animation="fade-right" />
                    <Indicator indicatorImg={Homework} indicatorTitle="83%" indicatorText={content.indicatorHomework} animation="fade-left" />
                </div>
                <div className="content__bottom">
                    <div className="content__bottom-chart">
                        <ChartsComp chartTitle={content.studentsNumberChartTitle} />
                        <div className="content__indicators">
                            <Indicator indicatorImg={Lection} indicatorTitle="25" indicatorText={content.indicatorLessons} animation="fade-right" />
                            <Indicator indicatorImg={Clock} indicatorTitle="139" indicatorText={content.indicatorHours} animation="fade-left" />
                        </div>
                    </div>
                    <StudentsCard studentsTitle={content.studentsMarkCardTitle} language={props.language} />
                    <StudentsType title={content.studentsTypeChartTitle} language={props.language} />
                </div>

            </div>
        </main>

    )
}