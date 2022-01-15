import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Weather defaultCity="Nairobi" />
        <footer>
          Coded by Hellen and{" "}
          <a href="https://github.com/Adhekon-code/my-react-weather-app">
            open source code
          </a>
        </footer>
      </div>
    </div>
  );
}
