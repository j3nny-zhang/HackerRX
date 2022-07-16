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

  const buttonStyle = {
    backgroundColor: "rgb(239, 131, 157, 0.2)", 
    padding: "15px 32px",
    border: "3px solid #EF839D",
    borderRadius: "32px 32px 32px 32px"
  }

  return (
    <div 
      style = {{
        position: "relative",
        float: "right",
        width: "30%",
        height: "85%",
        paddingTop: "30px",
        zIndex: "9px",
        margin: "60px"
      }}
    
    >
      <input 
        type="file" 
        onChange={fileSelectorHandler}
        ref={hiddenFileInput}
        style = { {display: 'none'} }
      />
      
      <div 
        style ={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          paddingTop: "100px"
        }}
      >
        <button onClick={handleClick} style={buttonStyle}>upload prescription</button>
        <button onClick={fileUploadHandler} style={buttonStyle}>refill prescription</button> 
      </div> 

    </div>
  );
}

export default UploadButton;
