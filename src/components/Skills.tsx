import { ReactComponent as HtmlImg } from "../images/skills/html5.svg";
import { ReactComponent as CssImg } from "../images/skills/css.svg";
import { ReactComponent as JsImg } from "../images/skills/javascript.svg";
import { ReactComponent as ReactImg } from "../images/skills/react.svg";
import { ReactComponent as DockerImg } from "../images/skills/docker.svg";
import { ReactComponent as TsImg } from "../images/skills/typescript.svg";

function Skills() {
  return (
    <div className="page-item skills">
      <h1 className="skills__title">Инструменты которые я использую</h1>
      <ul className="skills-container">
        <li className="skills-container-img"><HtmlImg></HtmlImg></li>
        <li className="skills-container-img"><CssImg></CssImg></li>
        <li className="skills-container-img"><JsImg></JsImg></li>
        <li className="skills-container-img"><ReactImg></ReactImg></li>
        <li className="skills-container-img"><DockerImg></DockerImg></li>
        <li className="skills-container-img"><TsImg></TsImg></li>
      </ul>
    </div>
  );
}

export default Skills;
