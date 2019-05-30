import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

class MyComponent extends Component {
  //  constructor(props) {
  //    super(props);
  //  }
  //  Instead of constructor (which should only inititialise state anyway use:
  state = {};
  //  eg
  //  state = { lat: null, errorMessage: "" };

  componentWillMount() {}

  //  Initialise anything and make api calls here and use setState to set state - never by direct assignment!
  //  This method is called only once...
  componentDidMount() {
    // eg
    //    window.navigator.geolocation.getCurrentPosition(
    //      position => this.setState({ lat: position.coords.latitude }),
    //      err => this.setState({ errorMessage: err.message })
    //    );
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  renderContent() {
    //    If any conditionals are needed to choose the correct HTML
    //    do it here and include this in the main render method eg
    //
    //    if (this.state.errorMessage && !this.state.lat) {
    //      return <div>Error: {this.state.errorMessage}</div>;
    //    }
    //
    //    if (!this.state.errorMessage && this.state.lat) {
    //      return <SeasonDisplay lat={this.state.lat} />;
    //    }
    //
    //    return <Spinner message={"Please accept location request"} />;
  }

  //  Return the JSX (required html bits) here
  //  If conditional stuff is needed create a renderContent() function
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

MyComponent.propTypes = {};
//  Use this
export default MyComponent;
//  or in index.js
//ReactDOM.render(<App/>, document.querySelector("#root"));
