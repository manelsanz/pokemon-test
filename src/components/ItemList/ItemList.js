import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";
import PropTypes from "prop-types";

const ItemList = ({ url, name }) => {
  const src = `http://pokestadium.com/sprites/xy/${name}.gif`;
  const fixedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Link to={`${url}/${name}`} className="itemWrapper">
      <img src={src} alt={fixedName} className="itemImage" />
      <h4 className="itemTitle">{fixedName}</h4>
    </Link>
  );
};

ItemList.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ItemList;
