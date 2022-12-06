import React from 'react'
import { Box, Button, Container, Divider, Grid, IconButton, styled, Typography } from '@mui/material'
import MuiGrid from '@mui/material/Grid';
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../layouts/Footer';
import { FaDownload, FaFileDownload, FaShareAlt } from 'react-icons/fa';
import Utable from '../utils/Utable';
function Profile() {
    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
            margin: theme.spacing(0, 2),
        },
    }));
    const token = JSON.parse(localStorage.getItem("token"));

    const download = async () => {
        try {
            const result = await fetch(`http://localhost:3300/api/attendance/export/class/${token._id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            });
            const res = await result.json();
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }

    }

    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs>
                    <Typography variant='h6'>
                        Course INFO
                    </Typography>
                    <p>Course Name: <span style={{ fontWeight: "bold" }}>{token.course_name}</span></p>
                    <p>Course Code: <span style={{ fontWeight: "bold" }}>{token._id}</span></p>
                    <p>Course Lecturer: <span style={{ fontWeight: "bold" }}>{token.lecturer_name}</span></p>
                    <Button onClick={logout} >Logout</Button>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                    <Typography variant='h6'>
                        Export your attendance record
                    </Typography>
                    <p>Click the button below to export your attendance record in excel or pdf file</p>
                    <Button onClick={download}><FaFileDownload /><span>download</span></Button>

                </Grid>

            </Grid>
            <Divider flexItem />
            <Grid container>
                <Typography variant='h6'>
                    Attendance Record
                </Typography>

                <Utable code={token._id} />
            </Grid>
            <Footer />
        </div>
    )
}

export default Profile