import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }s

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oppps..!!!!!! Something went wromg</h1>
          <h1>please refresh the page </h1>
        </div>
      );
    } else {
      return this.props.children;
    }
    return <div></div>;
  }
}
