function Language({ onChangeLanguage }: { onChangeLanguage: Function }) {

  
  return (
    <div className="language">
      <input type="checkbox" id="switch" onChange= {(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeLanguage(event)
        }/>
      <label htmlFor="switch" >Change Language</label>
    </div>
  );
}

export default Language;
