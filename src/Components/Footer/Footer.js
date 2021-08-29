import React from 'react'
import './Footer.scss'

export default function Footer(props) {
    let content = {
        English:{
            text: "Made by Nurmatjonov Javohir"
        },
        Uzbek: {
            text: "Javohir Nurmatjonov tomonidan ishlab chiqilgan"
        }
    }
    props.language === "Uzbek"
        ? (content = content.Uzbek)
        : (content = content.English)
    return (
        <footer className="footer">
            <div className="container">
                <span className="footer__text">{content.text}</span>
            </div>

        </footer>

    )
}