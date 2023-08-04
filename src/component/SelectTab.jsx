

import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import CreateTable from './CreateTable';
import CreateJsonText from './CreateJsonText';
import { useContext } from 'react';
import {DataContext} from "../context/DataProvider"

const SelectTab = () => {
    const [value , setValue]= useState(0)
    const {paramData ,setParamData , headerData,setHeaderData}= useContext(DataContext  )

    const handleChange=(e , newValue)=>{
 setValue(newValue)
    }
    return (
        <Box style={{marginTop:20}}>
            <Tabs value={value} onChange={handleChange}   TabIndicatorProps={{sx:{backgroundColor:"#F26B3A"}}}>
          
                <Tab label="Params"  />
                <Tab label="Header"  />
                <Tab label="Body"  />
            </Tabs>
            <Box
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
               
            >
            <CreateTable text={'Query Params'}  data={paramData} setData={setParamData}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
               
            >
             <CreateTable text={'Headers'}  data={headerData} setData={setHeaderData}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
               
            >
           <CreateJsonText/>
            </Box>
        </Box>
    )
}

export default SelectTab;