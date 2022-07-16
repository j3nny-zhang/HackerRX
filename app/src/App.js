import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(function () {
    fetch("/api/prescriptions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
