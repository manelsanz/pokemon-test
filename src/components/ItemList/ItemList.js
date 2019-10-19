import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ url, name }) => (
  <Link to={`${url}/${name}`} className="itemWrapper">
      <img src={`http://pokestadium.com/sprites/xy/${name}.gif`} alt={name} className="itemImage" />
      <h4 className="itemTitle">{name}</h4>
  </Link>
);

export default ItemList;
