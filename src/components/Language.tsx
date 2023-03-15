function Language({onChangeLanguage}: {onChangeLanguage: Function}) {
  return (


    <div className="language">
      <button className="language__button" onClick={(event: React.MouseEvent<HTMLElement>) => onChangeLanguage("en")}>En</button>
      <button className="language__button" onClick={(event: React.MouseEvent<HTMLElement>) => onChangeLanguage("ru")}>Ru</button>
    </div>
  );
}

export default Language;
