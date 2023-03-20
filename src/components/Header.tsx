import Language from "./Language";

interface HeaderProps {
  props: {
    header: {
      navigation: {
        title: string;
        id: string;
      }[];
    };
    onLanguageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

function Header({props}: HeaderProps) {
  return (
    <header className="page-item header">
      <nav className="nav">
        <ul id="top" className="nav-list">
          {props.header.navigation.map((item) => (
            <li key={item.title} className="nav-list-item">
              <a href={item.id} className="nav-list-item__link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Language onChangeLanguage={props.onLanguageChange}></Language>
      </nav>
    </header>
  );
}

export default Header;
