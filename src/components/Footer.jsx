import React from "react";
import githubLogo from "../assets/GitHub-Mark-64px.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/dicristea/weather-app">
        <img
          className="sourceGithub"
          src={githubLogo}
          alt="Project Source on Github"
        />
      </a>
      ddtea 2022
    </footer>
  );
};

export default Footer;
