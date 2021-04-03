import React from "react";

const withLoader = propToEvaluate => WrappedComponent => {
  return class WithLoader extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return this.props[propToEvaluate].length === 0 ? (
        <h2>Cargando</h2>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
