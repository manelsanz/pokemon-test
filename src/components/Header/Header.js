import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <img
      src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
      className="logo"
      alt="Pokémon"
    />
    <h3 className="headerTitle">Generation 1</h3>
    <h5 className="headerSubtitle">151 pokémon</h5>
  </header>
);

export default Header;
