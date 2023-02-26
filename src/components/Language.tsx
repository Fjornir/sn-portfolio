function Language({onChangeLanguage}: {onChangeLanguage: Function}) {
  return (


    <div>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => onChangeLanguage("en")}>En</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => onChangeLanguage("ru")}>Ru</button>
    </div>
  );
}

export default Language;
