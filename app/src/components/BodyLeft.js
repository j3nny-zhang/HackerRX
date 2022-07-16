import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function BodyLeft() {

    const tabStyle = {
        bg: "#354364",
        color:"#FDF5ED"
    }
  
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
        <Tabs variant="soft-rounded"
            style = {{paddingTop: "15px"}}>
            <TabList paddingLeft="15px">
                <Tab _selected={{bg: "#354265"}} color="#FDF5ED">One</Tab>
                <Tab style={tabStyle}>Two</Tab>
                <Tab>Three</Tab>
                <Tab>four</Tab>
                <Tab>five</Tab>
            </TabList>

            <TabPanels paddingLeft="30px">
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