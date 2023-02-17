import Header from "./Header";
import Description from "./Description";
import Works from "./Works";
import Contacts from "./Contacts";
import Footer from "./Footer";
import '../style/index.scss'
import Skills from "./Skills";

function Main() {
  return (
    <main className="page">
      <Header></Header>
      <Description></Description>
      <Works></Works>
      <Skills></Skills>
      <Contacts></Contacts>
      <Footer></Footer>
    </main>
  );
}

export default Main;
