import Header from "./Header";
import Description from "./Description";
import Works from "./Works";
import Contacts from "./Contacts";
import '../style/index.scss';
import Skills from "./Skills";
import Language from "./Language";
import React, { Dispatch, useState } from "react";
import english from "./languages/english.json"
import russian from "./languages/russian.json"

// interface ILangData {
//   header: {
//     navigation: string[]
//   };
// }


function Main() {
  const [language, setLanguage] = useState(english) 

  function onLanguageChange(lang: string) {
    console.log(lang);
    if(lang === "ru") {
      setLanguage(russian)
    }
    if(lang === "en") {
      setLanguage(english)
    }        
  } 

  return (
    <main className="page">
      <Language onChangeLanguage={onLanguageChange}></Language>
      <Header props={language.header}></Header>
      <Description props={language.description}></Description>
      <Works></Works>
      <Skills props={language.skills}></Skills>
      <Contacts props={language.contacts}></Contacts>
    </main>
  );
}

export default Main;
