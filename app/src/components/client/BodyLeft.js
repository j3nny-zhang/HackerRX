import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function BodyLeft() {
  
    return (
      <div 
        style = {{
            position: "absolute",
            float: "left",
            width: "70%",
            height: "85%",
            paddingTop: "15px",
        }}>
        <h1> my prescriptions </h1>
        <Tabs variant="soft-rounded"
            style = {{paddingTop: "15px"}}>
            <TabList paddingLeft="40px">
                <Tab _selected={{bg: "#354265"}} color="#FDF5ED">one</Tab>
                <Tab _selected={{bg: "#354265"}} color="#FDF5ED">two</Tab>
                <Tab _selected={{bg: "#354265"}} color="#FDF5ED">three</Tab>
                <Tab _selected={{bg: "#354265"}} color="#FDF5ED">four</Tab>
                <Tab _selected={{bg: "#354265"}} color="#FDF5ED">five</Tab>
            </TabList>

            <div
                style = {{
                    backgroundColor:"#141D34",
                    position: "absolute",
                    height: "70%",
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "0px 100px 100px 0px"
                }}
            >
            <TabPanels paddingLeft="50px">
                <TabPanel position="absolute">
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
            </div>
            </Tabs>
      </div>
    );
  }
  
  export default BodyLeft;