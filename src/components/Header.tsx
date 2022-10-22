import '../style/headerStyle.scss'
const navs = ["Обо мне", "Мои работы", "Контакты"];

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav">
          {navs.map((item) => (
            <li key={item} className="nav-item">
              <a href="#" className="nav-item__link">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
