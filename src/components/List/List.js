import React from "react";
import ItemList from "../ItemList/ItemList";
import "./List.css";

const List = ({ url }) => (
  <div className="listWrapper">
    {[
      "charizard",
      "blastoise",
      "venusaur",
      "tyranitar",
      "charizard",
      "blastoise",
      "venusaur",
      "charizard",
      "blastoise",
      "venusaur"
    ].map((item, key) => (
      <ItemList key={key} url={url} name={item} />
    ))}
  </div>
);

export default List;
