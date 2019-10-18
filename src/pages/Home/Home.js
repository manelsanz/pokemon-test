import React from "react";
// import PropTypes from 'prop-types';
import { Link, useRouteMatch } from "react-router-dom";

const Home = () => {
  let { url } = useRouteMatch();

  return (
    <div>
      <h1>HOME</h1>
      <Link to={`${url}/charizard`}>Charizard</Link>
      <Link to={`${url}/blastoise`}>Blastoise</Link>

    </div>
  );
};

export default Home;
