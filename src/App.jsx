import imgprofile from "./assets/profilePic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./App.css";

function ProfileCard(props) {
  return (
    <>
      <div className="profile">
        <img src={props.img} alt={`pic of ${props.name}`} className="logo" />
        <h1>{props.name}</h1>
        <h2>{props.job}</h2>
        <h3>{props.location}</h3>
        <div className="socials">
          <a href={props.github}>
            <FaGithub />
          </a>
          <a href={props.linkedin}>
            <FaLinkedin />
          </a>
          <a href={props.twitter}>
            <FaXTwitter />
          </a>
        </div>
        <button>Follow</button>
      </div>
    </>
  );
}
function App() {
  return <ProfileCard img={imgprofile} name="Saif Shayeb" job="Software Developer" location="Nablus, Palestine" github="https://github.com/saif-shayeb" linkedin="https://www.linkedin.com/in/saif-shayeb/" twitter="#" />
}

export default App;
