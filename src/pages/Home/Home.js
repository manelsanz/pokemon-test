import React from "react";
// import PropTypes from 'prop-types';
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import "./Home.css";

const Home = () => {
  let { url } = useRouteMatch();

  return (
    <div className="container">
      <Header />
      <List url={url} />
    </div>
  );
};

export default Home;
