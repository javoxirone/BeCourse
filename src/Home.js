import React from 'react'
import './Styles/Home.scss'
import homeImg from './Img/Illustrations/home.png'
import MainButton from "./Components/Buttons/MainButton"
import ArrowRightAltTwoToneIcon from '@material-ui/icons/ArrowRightAltTwoTone'
import VideoLibraryTwoToneIcon from "@material-ui/icons/VideoLibraryTwoTone"
import AssessmentTwoToneIcon from '@material-ui/icons/AssessmentTwoTone'
import BeenhereTwoToneIcon from '@material-ui/icons/BeenhereTwoTone'
import partner1 from './Img/Partners/image 17.png'
import partner2 from './Img/Partners/image 18.png'
import partner3 from './Img/Partners/image 19.png'
import partner4 from './Img/Partners/image 21.png'
import ServiceCard from "./Components/ServiceCard/ServiceCard"
function Home(props) {
    let content = {
        English: {
            homeTitle1: "OPENSOURCE",
            homeTitle2: "LEARNING PROJECT",
            autor: "By Nurmatjonov Javokhir",
            homeBtn: "Learn More",
            sectionTitle1: "Service",
            card1Title: "Online Lessons",
            card2Title: "Track Students",
            card3Title: "Estimate Students",
            card1Text: "In our platform you can teach your students online!",
            card2Text: "You can track the active students or other information in the dashboard page!",
            card3Text: "Estimate your students to give them motivation to study more!",
            sectionTitle2: "Partners",
            btnText: "Read More"

        },
        Uzbek: {

            homeTitle1: "HAMMA UCHUN OCHIQ",
            homeTitle2: "O'QUV PLATFORMA",
            autor: "Javohir Nurmatjonov tomonidan qilingan",
            homeBtn: "Batafsil",
            sectionTitle1: "Xizmat",
            card1Title: "Onlayn Darslar",
            card2Title: "O'quvchilarni Kuzatish",
            card3Title: "O'quvchilarni Baholash",
            card1Text: "Bizning platformamiz orqali siz o'quvchilaringizga onlayn dars berolisiz!",
            card2Text: "Siz o'quvchilaringiz davomati, baholarini kuzatib borishingiz mumkin!",
            card3Text: "O'quvchilaringizni baholang va ularga motivatsiya bering!",
            sectionTitle2: "Hamkorlar",
            btnText: "Batafsil"

        }
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)
    return(
        <main className="main">
            <section id="home" className="home">
                <div className="container">
                    <div className="home__content">
                        <div className="home__content-text">
                            <h1 className="home__title">{content.homeTitle1} <span>{content.homeTitle2}</span></h1>
                            <p className="home__text">{content.autor}</p>
                            <MainButton icon={ArrowRightAltTwoToneIcon} text={content.homeBtn} />
                        </div>
                        <img src={homeImg} alt="Learning Illustration" className="home__img" />
                    </div>
                </div>
            </section>
            <section id="service" className="service">
                <div className="container">
                    <div className="service__content">
                        <h3 className="section__title">
                            {content.sectionTitle1}
                        </h3>
                        <div className="service__cards">
                            <ServiceCard icon={VideoLibraryTwoToneIcon} title={content.card1Title} text={content.card1Text} cardBtn={content.btnText} />
                            <ServiceCard icon={AssessmentTwoToneIcon} title={content.card2Title} text={content.card2Text} cardBtn={content.btnText} />
                            <ServiceCard icon={BeenhereTwoToneIcon} title={content.card3Title} text={content.card3Text} cardBtn={content.btnText} />
                        </div>
                    </div>
                </div>
            </section>
            <service id="partners" className="partners">
                <div className="container">
                    <div className="partners__content">
                        <h3 className="section__title">
                            {content.sectionTitle2}
                        </h3>
                        <div className="partners__items">

                            <img src={partner1} alt=""/>
                            <img src={partner2} alt=""/>
                            <img src={partner3} alt=""/>
                            <img src={partner4} alt=""/>
                        </div>
                    </div>
                </div>
            </service>
        </main>
    )
}
export default Home