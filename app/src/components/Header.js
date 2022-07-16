import React from "react";
import { Button } from '@chakra-ui/react'

function Header() {
  
    return (
      <div
        style={{
            paddingTop: "15px",
            paddingRight: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            columnGap: "15px",
        }}
      > 
        <p>welcome, user</p>
        <Button size='xs'>profile</Button>
        <Button size='xs'>logout</Button>
      </div>
    );
  }
  
  export default Header;