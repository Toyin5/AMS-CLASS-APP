import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, Paper, TableContainer, TableHead, TableRow } from '@mui/material'
function Utable({ ...props }) {
    const [row, setRow] = useState([])
    const [column, setColumn] = useState([])

    function calculateTotal(obj) {
        let total = 0
        for (const key in obj) {
            if (typeof (obj[key]) === "number") {
                total += obj[key]
            }
        }
        return total;
    }

    const getTable = async () => {
        try {
            const result = await fetch(`https://attendanceapi.vercel.app/api/attendance/table/class/${props.code}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            });
            const res = await result.json();
            console.log(res.data)
            setRow(res.data)
            const arr = ["Student ID", "Student Name"]
            const values = Object.values(res.data[0])
            for (let i = 2; i < values.length; i++) {
                arr.push("lec " + (i - 1))
            }
            arr.push("Total")
            setColumn(arr)
        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getTable()
    }, [])

    return (
        <>
            {
                (row)
                    ?
                    <TableContainer component={Paper}>
                        <Table aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    {column.map((c) => <TableCell style={{ fontWeight: "bold" }} component="th" key={c}>{c}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row.map((r) => {
                                    const values = Object.values(r)
                                    console.log(values)
                                    values.push(calculateTotal(r).toString())
                                    return (
                                        <TableRow key={r._id}>
                                            {values.map(v => (
                                                <TableCell>{v}</TableCell>
                                            ))}
                                        </TableRow>
                                    )
                                }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <p>No attendance record yet</p>
            }
        </>
    )
}

export default Utable