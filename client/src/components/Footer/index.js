import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer bg-dark py-3 text-center">
        <div className="container">
            <a href="https://github.com/supercarboy88">
                <span className="fab fa-github" />
            </a>
            <span>
                Nick Ying 2019
            </span>                
        </div>
    </footer>
  );
}

export default Footer;