import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="call-to-action">
      <div className="container center">
        <h1>Want to see similar projects?</h1>
        <p>Check out my GitHub</p>
        <div className="links">
          <a href="https://github.com/damnge">
            <FontAwesomeIcon className="links__icon" icon={faGithub} />
          </a>
        </div>
        <div class="copyright">© damgrela</div>
      </div>
    </footer>
  );
}
