import React, { Component } from "react";
import { useParams, withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';

const Detail = () => {
  let { name } = useParams();

  return (
    <div>
      <button onClick={this.props.history.goBack()}>Go back</button>
      <h1>DETAIL Pokémon: {name}</h1>
    </div>
  );
};

export default Detail;
