import React, { useState } from 'react'
import { Checkbox, TableCell, TableRow, TextField } from '@mui/material'

const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkbox, setCheckbox] = useState(false);


    const handleChange = (e) => {
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        if (!checkbox) {
            setCheckbox(true)
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result,  id:rowId, check: true }
        } else {
            setCheckbox(false);
            result = { ...result,  id:rowId,check: false }
        }




        let index = data.findIndex(value => value.id === Number(e.target.name))
        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            })

            setData(newArray)
        }
        console.log(data);



    }

    const onTextChange = (e) => {

        let result = data.filter(entry => entry.id === rowId)[0];

        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex(value => value.id === rowId)
        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            })

            setData(newArray)
        }
        // console.log(data);
    }
    return (
        <TableRow>
            <TableCell sx={{ border: '1px solid rgb(224, 224, 224 , 1)', borderCollapse: "collapse", padding: '0 5px' }} align='left'>
                <Checkbox onChange={(e) => handleChange(e)} checked={checkbox} name={rowId} />
            </TableCell>
            <TableCell sx={{ border: '1px solid rgb(224, 224, 224 , 1)', borderCollapse: "collapse", padding: '0 5px' }} align='left'>
                <TextField inputProps={{ sx: { height: 30, padding: '0 5px', width: '100%' } }}
                    onChange={(e) => onTextChange(e)}
                    name="key"
                />
            </TableCell>
            <TableCell sx={{ border: '1px solid rgb(224, 224, 224 , 1)', borderCollapse: "collapse", padding: '0 5px' }} align='left'><TextField inputProps={{ sx: { height: 30, padding: '0 5px', width: '100%' } }}
                onChange={(e) => onTextChange(e)}
                name="value"
            />
            </TableCell>
        </TableRow>
    )
}

export default AddRow;