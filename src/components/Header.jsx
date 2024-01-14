import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  useEffect(() => {
    const menuItems = document.querySelectorAll(
      ".header .wrapper .right-div .menu li"
    );
    menuItems.forEach((item) => {
      item.addEventListener("click", hideMenu);
    });
  }, []);
  function showMenu() {
    const menu = document.querySelector(".header .wrapper .right-div .menu");
    const menuBtn = document.querySelector(
      ".header .wrapper .right-div .burger-menu"
    );
    const closeBtn = document.querySelector(
      ".header .wrapper .right-div .close-btn"
    );
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
    menu.style.right = "0";
  }
  function hideMenu() {
    const menu = document.querySelector(".header .wrapper .right-div .menu");
    const menuBtn = document.querySelector(
      ".header .wrapper .right-div .burger-menu"
    );
    const closeBtn = document.querySelector(
      ".header .wrapper .right-div .close-btn"
    );
    menu.style.right = "-100%";
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
  }

  return (
    <div className="header container">
      <div className="wrapper">
        <div className="left-div">
          <img src={logo} className="logo-img" />
          <h1 className="logo-text">
            <Link to={"/"}>BlockSoc</Link>
          </h1>
        </div>
        <div className="right-div">
          <svg
            className="close-btn hidden"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            onClick={hideMenu}
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
          </svg>
          <svg
            className="burger-menu hidden"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            onClick={showMenu}
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
          </svg>
          <ul className="menu">
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>Blogs</li>
            <li>
              <Link>Resources</Link>
            </li>
            <li>
              <Link>Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
