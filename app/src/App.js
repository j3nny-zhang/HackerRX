import './App.css';
import React, { useEffect } from "react";
import UploadButton from './components/UploadButton';
import Header from './components/Header';
import BodyLeft from './components/BodyLeft';

function App() {

  useEffect(function(){
    fetch('/api/prescription')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <> 
      <Header />
      {/* <UploadButton /> */}
      <BodyLeft />
    </>
  );
}

export default App;
