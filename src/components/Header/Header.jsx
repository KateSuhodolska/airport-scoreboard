import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo-img"
          src={require("./logo@2x.png")}
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
