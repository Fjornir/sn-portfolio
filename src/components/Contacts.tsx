import { ReactComponent as Telegram } from "../images/contacts/telegram.svg";
import { ReactComponent as Mail } from "../images/contacts/mail.svg";

function Contacts({ props }: { props: { title: string } }) {
  function contactsClickHandler(item: string) {
    if (item === "mail") {
      window.open("mailto:fjornir@outlook.com", "_self");
    }
    if (item === "telegram") {
      window.open("https://t.me/fjornir", "_self");
    }
  }

  return (
    <footer id="contact" className="contacts">
      <h3 className="contacts__title">{props.title}</h3>
      <div className="contacts-container">
        <address className="contacts-container-item">
          <a href="mailto:fjornir@outlook.com">fjornir@outlook.com</a>
          <Mail
            onClick={() => contactsClickHandler("mail")}
            className="contacts-container-item__icon"
          ></Mail>
        </address>
        <address className="contacts-container-item">
          <a href="https://t.me/fjornir">telegram</a>
          <Telegram
            onClick={() => contactsClickHandler("telegram")}
            className="contacts-container-item__icon"
          ></Telegram>
        </address>
      </div>
    </footer>
  );
}

export default Contacts;
