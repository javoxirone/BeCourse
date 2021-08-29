import React, {useState} from 'react'
import './Styles/style.scss'

import Logo from './Img/logo.svg'
// Components
import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/Main"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

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
  return (
    <div className={`App${filter ? " active" : ""}`} >
        <Sidebar sidebarLogo={Logo}
                 language={language}
                 handleSetLanguage={language => {
                     setLanguage(language);
                     storeLanguageInLocalStorage(language);
                 }}
                 filterHandler={filterHandler}
        />
        <div className="app__content">
            <Header language={language} />
            <Main language={language} />

            <Footer language={language} />
        </div>

    </div>
  );
}


export default App;
