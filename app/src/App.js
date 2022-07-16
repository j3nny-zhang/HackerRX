import './App.css';
import React, { useEffect } from "react";
import ClientPage from './pages/ClientPage';

function App() {

  useEffect(function(){
    fetch('/api/prescription')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <ClientPage />
  );
}

export default App;
