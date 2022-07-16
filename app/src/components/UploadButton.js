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


  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  }

  return (
    <div className="App">
      <input 
        type="file" 
        onChange={fileSelectorHandler}
        ref={hiddenFileInput}
        style = { {display: 'none'} }
      />
      <button onClick={handleClick}>upload prescription</button>
      <button onClick={fileUploadHandler}>refill prescription</button>  
    </div>
  );
}

export default UploadButton;
