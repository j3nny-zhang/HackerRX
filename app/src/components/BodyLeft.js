import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './styling/BodyLeft.css'

function BodyLeft() {
  
    return (
      <div 
        style = {{
            position: "absolute",
            float: "left",
            width: "80%",
            height: "85%",
            paddingTop: "15px"
        }}>
        <h1> my prescriptions </h1>
        <Tabs 
            style = {{paddingTop: "15px"}}>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab>four</Tab>
                <Tab>five</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
                <TabPanel>
                    <p>four!</p>
                </TabPanel>
                <TabPanel>
                    <p>five!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
      </div>
    );
  }
  
  export default BodyLeft;