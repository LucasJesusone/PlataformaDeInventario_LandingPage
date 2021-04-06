/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./nav.scss";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <h1>Minv</h1>
        </div>
        <ul>
          <a
            href="https://www.youtube.com/watch?v=L7Rh_gkJT6M"
            target="_blank"
            rel="noreferrer"
          />

          <button>Login</button>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
