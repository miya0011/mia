import React from "react";
import "../burgerMenu/BurgerMenu.css"
const BurgerMenu = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="/products">Ассортимент</a>
                </li>
                <li>
                  <a href="/contacts">Контакты</a>
                </li>
                <li>
                  <a href="/about">О нас</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
