import './App.css';
import React, { useEffect } from "react";
import UploadButton from './components/UploadButton';
import Header from './components/Header';

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
    </>
  );
}

export default App;
