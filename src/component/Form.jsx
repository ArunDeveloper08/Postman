


import React from 'react'
import { Box, MenuItem, Select, TextField, Button } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
const Form = ({onSendClick}) => {

    const { formData, setFormData } = useContext(DataContext);

    const handleChange = (e) => {

        setFormData({...formData,type:e.target.value})

    }
     
    const onUrlChange=(e)=>{
        setFormData({...formData, url:e.target.value})
    }





    return (
        <>

            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Select

                    value={formData.type}
                    label="POST"
                    style={{ width: 150, height: 40 }}
                    onChange={handleChange}
                >
                    <MenuItem value='POST'>POST</MenuItem>
                    <MenuItem value='GET'>GET</MenuItem>

                </Select>
                <TextField size="small" style={{ width: "100%", background: "#f6f6f6" }} onChange={(e)=>onUrlChange(e)} />
                <Button variant='contained' style={{ marginLeft: "5 !important" }}
                onClick={()=>onSendClick()}
                > Send</Button>
            </Box>

        </>


    )
}

export default Form;