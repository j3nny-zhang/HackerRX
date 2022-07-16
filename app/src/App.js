import './App.css';
import React, { useEffect } from "react";

function App() {

  useEffect(function(){
    fetch('/api/prescription')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
