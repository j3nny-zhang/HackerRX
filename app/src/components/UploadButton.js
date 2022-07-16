import React, { useState } from 'react';
import axios from "axios";

function UploadButton() {
  const [file, setFile] = useState();

  const fileSelectorHandler = event => {
    setFile(event.target.files[0]);
    console.log(file);
  }

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", file, file.name);
    axios.post("http://localhost:5000/api/images/upload", fd)
      .then(res => {
        console.log(res);
      });
  }

  return (
    <div className="App">
      <input type="file" onChange={fileSelectorHandler}/>
      <button onClick={fileUploadHandler}>upload</button>  
    </div>
  );
}

export default UploadButton;
