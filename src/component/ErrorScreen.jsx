import { Box, Typography } from '@mui/material';
import React from 'react'

const ErrorScreen = () => {
    const error ="http://i.stack.imgur.com/01tZQ.png"
  return (
    <>
    <Box>
        <Typography mt={2} mb={2}>Response</Typography>
        <Box style={{display:"flex"}}>
            <img src={error} style={{margin:"auto" , objectPosition:"center 0%"}}/>
        </Box>
    </Box>
    </>
  )
}
export default ErrorScreen;