import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Header from './Header'
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import { FaUser } from 'react-icons/fa';
import QrCode from '../utils/QrCode';
import UtilModal from '../utils/UtilModal';
import Footer from '../layouts/Footer';

function RegisterStudent() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [students, setStudents] = useState([])
    const url = import.meta.env.VITE_LOCAL
    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
            margin: theme.spacing(0, 2),
        },
    }));
    const style = {
        "paddingTop": "30px"
    }

    const getStudents = async () => {
        try {
            const result = await fetch(`${url}api/get/students/${token._id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            });
            const data = await result.json();
            setStudents(data.data)
            return data.data;
        } catch (err) {
            return console.log(err);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => getStudents(), 2000);
        return () => clearInterval(interval);
    }, [])


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h3>Register Students</h3>
                        <button onClick={handleOpen} className='button is-large is-focus is-primary is-inverted '>Generate Code</button>

                        <UtilModal content={<QrCode url={`https://attendanceapi.vercel.app/api/register/student/${token._id}`} size={256} color="green" />} open={open} handleClose={handleClose} />
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h4>Registered Students - {students.length}</h4>
                    </div>
                    <Divider />
                    {(students.length > 0) ?
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                        >

                            {students.map((student) => <ListItem key={student._id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FaUser />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={student.student_name} secondary={"ID: " + student._id} />
                                <Divider variant="inset" component="li" />
                            </ListItem>)
                            }
                        </List>
                        : (<p className='has-text-centered'>No student registered yet</p>)}
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default RegisterStudent