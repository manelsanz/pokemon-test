import React, { Component } from "react";
import { useParams, useHistory } from "react-router-dom";
// import PropTypes from 'prop-types';
import "./Detail.css";

const Detail = () => {
  let { name } = useParams();
  let history = useHistory();

  return (
    <div className="container">
      <div className="detailWrapper">
        <button onClick={() => history.goBack()} className="closeButton">
          x
        </button>
        <div className="detailHeader">
        <img
          src={`http://pokestadium.com/sprites/xy/${name}.gif`}
          alt={name}
          className="itemImage"
        />
        <h4 className="itemName">{name}</h4>
        </div>

        <div className="details">
          <p>ID: <span>3</span></p>
          <p>Types</p>
                    <ul>
            <li><span>Grass</span></li>
          </ul>
          <p>Height: <span>20</span></p>
          <p>Abilities</p>
          <ul>
            <li><span>Plant attack</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
