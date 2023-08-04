import { Box, Typography, TextareaAutosize } from '@mui/material'
import React from 'react'

const textAreaStyle = {
  width: '100%',
  padding: '10px',
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: 'no-repeat',
  paddingLeft: "35px",
  paddingTop: 10,
  borderColor: "#ccc",
}

const Response = ({ data }) => {

  let obj = data;
  let readableObj = '{\n';

  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    readableObj += '\t'
    readableObj += `"${key}": ${typeof obj[key] === 'string' ? '"' + obj[key] + '"' : obj[key]}`;

    if (i !== keys.length - 1) {
      readableObj += ',\n';
    }
  }
  readableObj += '\n}';

  return (
    <Box>
      <Typography mt={2} mb={3}> Response</Typography>
      <TextareaAutosize
        minRows={3}
        maxRows={5}
        style={textAreaStyle}
        disabled
        value={readableObj}
      />
    </Box>
  )
}

export default Response;
