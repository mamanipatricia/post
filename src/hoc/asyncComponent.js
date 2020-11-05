import React, { Component } from "react";

// dinamic loaded component - (importComponent) this is a function reference
const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      // this component property will be set to the dynamically loaded component ***
      component: null,
    };

    // *** and the code for this will get implemented in componentDidMount
    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const C = this.state.component;
      //  this component will eventually render some dynamically loaded component and we decide which component it should be with the function we passed to AsyncComponent
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
