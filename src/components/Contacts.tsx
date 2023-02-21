import { ReactComponent as Telegram } from "../images/contacts/telegram.svg";
import { ReactComponent as Mail } from "../images/contacts/mail.svg";

function Contacts() {
  return (
    <footer className="contacts">
      <h3 className="contacts__title">Для связи я использую</h3>
      <div className="contacts-container">
        <address className="contacts-container-item">
          <a href="mailto:fjornir@outlook.com">fjornir@outlook.com</a>
          <Mail></Mail>
        </address>
        <address className="contacts-container-item">
          <a href="mailto:fjornir@outlook.com">telegram</a>
          <Telegram></Telegram>
        </address>
      </div>
    </footer>
  );
}

export default Contacts;
