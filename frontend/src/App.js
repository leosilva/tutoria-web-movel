import React from "react";
import "./styles.css";

import Header from "./components/Header";
import Routes from "./Routes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}
