import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Detail.css";
import { connect } from "react-redux";
import { getDetails } from "../../actions/index";
import Loading from "../../components/Loading/Loading";

class Detail extends Component {
  componentDidMount() {
    const {
      match: { params },
      onGetDetails
    } = this.props;
    onGetDetails(params.name);
  }

  render() {
    const { details, isLoading } = this.props;

    if (!details || isLoading) {
      return <Loading />;
    }

    const fixedName =
      details.name.charAt(0).toUpperCase() + details.name.slice(1);

    return (
      <div className="container">
        <div className="detailWrapper">
          <Link to="/pokemon" className="linkBack">
            x
          </Link>
          <div className="detailHeader">
            <img
              src={`http://pokestadium.com/sprites/xy/${details.name}.gif`}
              alt={fixedName}
            />
            <h4 className="itemName">{fixedName}</h4>
          </div>

          <div className="details">
            <p>
              ID: <span>{details.id}</span>
            </p>
            <p>Types</p>
            <ul>
              {details.types.map(item => (
                <li key={`type-${item.slot}`}>
                  <span>{item.type.name}</span>
                </li>
              ))}
            </ul>
            <p>
              Height: <span>{details.height}</span>
            </p>
            <p>Abilities</p>
            <ul>
              {details.abilities.map(item => (
                <li key={`ability-${item.slot}`}>
                  <span>{item.ability.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// Detail.propTypes = {
//   store: PropTypes.array.isRequired
// };

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    details: state.details
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetDetails: name => dispatch(getDetails(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
