import React, { useState } from "react";
import MyComponent from "./MyComponent";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
