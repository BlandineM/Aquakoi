import React from "react";
import "./style/Header.scss";
function Header() {
  return (
    <div className="Header">
      <header>
        <h1>Aquakoi</h1>
        <ul>
          <li>Produits</li>
          <li>Enchères</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
