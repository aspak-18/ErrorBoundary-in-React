import React, { useState } from "react";

const MyComponent = () => {
  let [state, setState] = useState({ value: 0 });

  if (state.value > 10) {
    throw new Error("State value is greater than 10");
  }
  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={() => setState({ value: state.value + 1 })}>
        Click
      </button>
    </div>
  );
};

export default MyComponent;
