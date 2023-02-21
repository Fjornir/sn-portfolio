import Header from "./Header";
import Description from "./Description";
import Works from "./Works";
import Contacts from "./Contacts";
import '../style/index.scss';
import Skills from "./Skills";
import Language from "./Language";

function Main() {
  return (
    <main className="page">
      <Language></Language>
      <Header></Header>
      <Description></Description>
      <Works></Works>
      <Skills></Skills>
      <Contacts></Contacts>
    </main>
  );
}

export default Main;
