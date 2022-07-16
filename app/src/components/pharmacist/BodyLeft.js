import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

function BodyLeft() {

    const toast = useToast()

    const buttonStyle = {
        backgroundColor: "rgb(239, 131, 157, 0.2)", 
        padding: "15px 32px",
        border: "3px solid #EF839D",
        borderRadius: "32px 32px 32px 32px",
      }
  
    return (
    <>
      <div 
        style = {{
            position: "absolute",
            float: "left",
            width: "70%",
            height: "85%",
            paddingTop: "15px",
        }}>
        <h1> my patient </h1>
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

    <div 
        style={{
            zIndex: "9",
            position: "absolute",
            bottom: "75px",
            paddingLeft: "7%"
        }}> 
        <button 
            style={buttonStyle}
            onClick={()=>
                toast({
                    title:"request sent.",
                    description: "we have notified your patient that it is time to refill their prescription.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: "bottom-right",
                })
            }
        >request prescription refill</button>
    </div>
    </>
    );
  }
  
  export default BodyLeft;