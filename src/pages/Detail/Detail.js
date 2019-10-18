import React, { Component } from "react";
import { useParams, useHistory } from "react-router-dom";
// import PropTypes from 'prop-types';

const Detail = () => {
  let { name } = useParams();
  let history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
      <h1>DETAIL Pokémon: {name}</h1>
    </div>
  );
};

export default Detail;
