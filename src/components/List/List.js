import React from "react";
import ItemList from "../ItemList/ItemList";
import "./List.css";
import PropTypes from "prop-types";

const List = ({ url, data }) => (
  <div className="listWrapper">
    {data.map((item, key) => (
      <ItemList key={key} url={url} name={item.name} />
    ))}
  </div>
);

// List.propTypes = {
//   store: PropTypes.array.isRequired
// };

export default List;
