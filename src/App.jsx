import imgprofile from "./assets/profilePic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./App.css";

function Profile() {
  return (
    <>
      <div className="profile">
        <img src={imgprofile} alt={`pic of saif`} className="logo" />
        <h1>Saif Shayeb</h1>
        <h2>Software Developer</h2>
        <h3>Nablus,pal</h3>
        <div className="socials">
          <a href="https://github.com/saif-shayeb">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saif-shayeb-702054258">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
        <button>Follow</button>
      </div>
    </>
  );
}
function App() {
  return <Profile />;
}

export default App;
