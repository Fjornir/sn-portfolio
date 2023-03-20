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

function Main() {
  const [language, setLanguage] = useState(english) 

  function onLanguageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.checked) {
      setLanguage(russian)
    }else {
      setLanguage(english)
    }        
  } 

  return (
    <main className="page">
      <Header props={{header: language.header, onLanguageChange}}></Header>
      <Description props={language.description}></Description>
      <Works></Works>
      <Skills props={language.skills}></Skills>
      <Contacts props={language.contacts}></Contacts>
    </main>
  );
}

export default Main;
