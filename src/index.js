import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
return(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;