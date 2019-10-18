import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ url, name }) => (
  <Link to={`${url}/${name}`} className="itemWrapper">
    <div>
      <img src={`http://pokestadium.com/sprites/xy/${name}.gif`} alt={name} />
      <span className="itemText">{name}</span>
    </div>
  </Link>
);

export default ItemList;
