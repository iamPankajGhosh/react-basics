import { useState } from "react";
import "./App.css";

function App() {
  // let value = 0;
  const addValue = () => {
    if (value < 20) {
      value = value + 1;
    }
    setValue(value);
  };

  const removeValue = () => {
    if (value > 0) {
      value = value - 1;
    }

    setValue(value);
  };

  let [value, setValue] = useState(0);
  return (
    <>
      <h1>React Project</h1>
      <h2>Counter value : {value}</h2>

      <button onClick={addValue}>Add Value {value}</button>
      <button onClick={removeValue}>Remove Value {value}</button>
    </>
  );
}

export default App;
