import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo-img"
          src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
