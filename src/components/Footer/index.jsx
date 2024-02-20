import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6" id="Contact">
            <h5>Contact Me</h5>
            <p>Email: williamtzefengho@gmail.com</p>
            <p>Phone: (+44) 456-7890</p>
            <p>
              <a
                href="https://uk.linkedin.com/in/william-ho-b519621b2"
                target="_blank"
                classNmae="text-primary custom-link"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <h5>GitHub Profile</h5>
            <p>
              <a
                href="https://github.com/howilliam"
                target="_blank"
                className="text-primary custom-link"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
