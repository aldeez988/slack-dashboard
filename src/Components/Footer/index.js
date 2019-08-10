import React from "react";
import "./footer.css";

export default () => (
  <footer className="footer fixed-bottom">
    <ul className="mb-0 pl-0">
      <li className="list-inline-item">
        <p className="m-0">&copy; 2019 Always 200</p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating pl-4"
          href="https://www.facebook.com/codeyourfuture.io"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating pl-2"
          href="https://twitter.com/CodeYourFuture_"
        >
          <i className="fa fa-twitter" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating pl-2"
          href="https://www.linkedin.com/company/codeyourfuture"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating pl-2"
          href="mailto:contact@codeyourfuture.io"
        >
          <i className="fa fa-envelope" />
        </a>
      </li>
    </ul>
  </footer>
);
