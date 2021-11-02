import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './Styles/style.scss'

// Components
import Home from './Home'
import Dashboard from './Dashboard'
import Chat from "./Chat";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Logo from "./Img/logo.svg";
import Sidebar from "./Components/Sidebar/Sidebar";
function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language)
}
function App() {
    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );
    let [filter, setFilter] = useState(false)
    function filterHandler (){
        if(filter == true){
            setFilter(false)
        }
        if(filter == false){


            setFilter(true)
        }
        console.log(filter)
    }
    return(
        <BrowserRouter>
            <div className={`App${filter ? " active" : ""}`}>
                <Sidebar sidebarLogo={Logo}
                         language={language}
                         handleSetLanguage={language => {
                             setLanguage(language);
                             storeLanguageInLocalStorage(language);
                         }}
                         filterHandler={filterHandler}
                />
                <div className="app__content">
                    <Header />

                    <Switch>
                        <Route path="/" component={() => <Home language={language} />}  />
                        <Route exact path="/home" component={() => <Home language={language} />} />
                        <Route path="/dashboard" component={() => <Dashboard language={language} />} />
                        <Route path="/chat" component={Chat} />
                    </Switch>
                    <Footer />
                </div>
                {/*<Home />*/}
                {/*<Dashboard />*/}
                {/*<Footer />*/}
            </div>
        </BrowserRouter>

    )
}

const HomeMain = () => {
    return(
        <Home />
    )
}

export default App;
