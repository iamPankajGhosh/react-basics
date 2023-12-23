// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/*function MyApp() {
  return (
    <div>
      <h1>React with custom function</h1>
    </div>
  );
}*/

/*const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};*/

/*const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);*/

/*const veriable = "React";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Visit Google",
  veriable
);*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
