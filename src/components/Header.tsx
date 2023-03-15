const navs = [{title:"Обо мне", id:"#top"}, {title:"Мои работы"}, {title:"Контакты"}];

function Header({props}: { props: { navigation: { title: string; id: string; }[] }; }) {  
    
  return (
    <header className="page-item">
      <nav>
        <ul id="top" className="nav">
          {props.navigation.map((item) => (
            <li key={item.title} className="nav-item">
              <a href={item.id} className="nav-item__link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
