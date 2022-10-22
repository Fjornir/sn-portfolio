import Header from "./Header";
import AboutMe from "./AboutMe";
import MyWorks from "./MyWorks";
import Contacts from "./Contacts";
import Footer from "./Footer";
import '../style/mainStyle.scss'

function Main() {
  return (
    <div className="container">
      <Header></Header>
      <AboutMe></AboutMe>
      <MyWorks></MyWorks>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default Main;
