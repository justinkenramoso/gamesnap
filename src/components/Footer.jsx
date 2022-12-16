import React from "react";

function Footer() {
  return (
    <footer className="text-center">
      <hr className="m-0" />
      <div className="py-3">
        <p>
          This project was made possible by <br />
          <a
            href="https://www.mmobomb.com/api"
            target="_blank"
            rel="noreferrer"
            className="color1 mmobomb"
          >
            MMOBOMB <i class="fa-solid fa-bomb"></i> {"(RapidAPI)"}
          </a>
        </p>
        <p>Tools: React, Bootstrap and Axios</p>
        <p>
          <a
            href="https://justin-portfolio.vercel.app/"
            className="ken"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-code"></i> Justin Ken Ramoso
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
