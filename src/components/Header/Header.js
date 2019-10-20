import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <img
      src="/pokemon-logo.png"
      className="logo"
      alt="Pokémon"
    />
    <h3 className="headerTitle">Generation 1</h3>
    <h5 className="headerSubtitle">151 pokemon</h5>
  </header>
);

export default Header;
