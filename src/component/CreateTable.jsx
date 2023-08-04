import { Box, Table, TableCell, TableHead, Typography, TableRow, TableBody } from '@mui/material';
import React from 'react'
import AddRow from './AddRow';
import { useState } from 'react';

const CreateTable = ({ text, data, setData }) => {
    const [rows, addRows] = useState([0]);
    return (
        <div>
            <Box>
                <Typography mt={2} mb={2}>{text}</Typography>

                <Table sx={{ minWidth: '100%', border: '1px solid rgb(224, 224, 224 , 1)' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ border: '1px solid rgb(224, 224, 224 , 1)', borderCollapse: "collapse" }}> </TableCell>
                            <TableCell sx={{ border: '1px solid rgb(224, 224, 224 , 1)', borderCollapse: "collapse" }}>KEY</TableCell>
                            <TableCell sx={{ border: '1px solid rgb(224, 224, 224 , 1)', borderCollapse: "collapse" }}>VALUE</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {
                            rows?.map((row, index) => {
                                return (
                                    <>
                                        <AddRow addRows={addRows} rowId={index} key={index} data={data} setData={setData} />
                                    </>
                                )
                            })
                        }
                    </TableBody>

                </Table>

            </Box>
        </div>
    )
}

export default CreateTable; 