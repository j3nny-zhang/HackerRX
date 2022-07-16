import React from 'react';

function PatientInfo() {

    const textStyle = {
        display: "flex",
        fontSize: "x-large",
        paddingTop: "15px"
    }

  return (
    <div 
      style = {{
        position: "absolute",
        right: "0",
        width: "30%",
        height: "85%",
        paddingTop: "40px",
        paddingLeft: "30px",
      }}
    
    >
        <div 
            style = {{
                paddingTop: "60%",
            }}>
            <div style={textStyle}> 
                <h2>name:</h2>
                <p>Jane Doe</p>       
            </div>
            <div style={textStyle}> 
                <h2>age:</h2>
                <p>33</p>       
            </div>
            <div style={textStyle}> 
                <h2>weight:</h2>
                <p>135lbs</p>       
            </div>
            <div style={textStyle}> 
                <h2>height:</h2>
                <p>168cm</p>       
            </div>
        </div>

    </div>
  );
}

export default PatientInfo;
