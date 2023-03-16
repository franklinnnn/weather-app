import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./Home";

const App = () => {
  return (
    <div className="app">
      <Home />
      <About />
    </div>
  );
};

export default App;
