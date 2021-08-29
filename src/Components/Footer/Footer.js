import React from 'react'
import './Footer.scss'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
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
                <div className="social">
                    <a href="https://www.instagram.com/javoxirone/">
                        <InstagramIcon className="social__icon" />
                    </a>
                    <a href="https://www.facebook.com/javohir.nurmatjonov.5">
                        <FacebookIcon className="social__icon" />
                    </a>
                    <a href="#">
                        <TwitterIcon className="social__icon" />
                    </a>
                    <a href="https://github.com/JavoxirOne/">
                        <GitHubIcon className="social__icon" />
                    </a>

                </div>
            </div>

        </footer>

    )
}