import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import "./Home.css";
import { connect } from "react-redux";
import { getList } from "../../actions/index";

class Home extends Component {
  componentDidMount() {
    this.props.onGetList();
  }

  render() {
    const { match, list, isLoading } = this.props;

    if (!list.length || isLoading) {
      return <Loading />;
    }

    return (
      <div className="container">
        <Header />
        <List url={match.url} data={list} />
      </div>
    );
  }
}

// Home.propTypes = {
//   store: PropTypes.array.isRequired
// };

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch(getList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
