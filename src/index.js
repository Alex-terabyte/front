import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/store";

const store = new Store();

ReactDOM.render(<App />, document.getElementById("root"));
