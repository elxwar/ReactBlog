import React from "react";
import PropTypes from "prop-types";

//  Set config objects rather than complex if statements eg
//  const seasonConfig = {
//    summer: {
//      text: "let's hit the beach",
//      iconName: "sun"
//    },
//    winter: {
//      text: "Brrr, it's cold",
//      iconName: "snowflake"
//    };
//  };

const myConfig = {
  case1: {},
  case2: {}
};

//  Put logic in functions eg
//  const getSeason = (lat, month) => {
//    if (month > 2 && month < 9) {
//      return lat > 0 ? "summer" : "winter";
//    } else {
//      return lat > 0 ? "winter" : "summer";
//    }
//  };

const getSomething = (x, y) => {
  return x * y;
};

//  This should ONLY return the HTML in JSX all logic in functions above eg
//  const SeasonDisplay = props => {
//    const season = getSeason(props.lat, new Date().getMonth());
//    const {text, iconName} = seasonConfig[season];
//    return (
//      <div>
//        <i className={`${iconName}  icon`} />
//        <h1>{text}</h1>
//        <i className={`${iconName}  icon`} />
//      </div>
//    );
//  };

const MyComponent = props => {
  return <div />;
};

MyComponent.propTypes = {};

export default MyComponent;
