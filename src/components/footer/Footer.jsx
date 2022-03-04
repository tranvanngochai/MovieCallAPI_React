import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/KMAMovie.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">KMAMovie</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact US</Link>
            <Link to="/">About US</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Youtube</Link>
            <Link to="/">TV</Link>
            <Link to="/">Movie</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
