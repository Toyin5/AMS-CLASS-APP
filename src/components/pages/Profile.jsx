import React from 'react'
import { Box, Button, Container, Divider, Grid, IconButton, styled, Typography } from '@mui/material'
import MuiGrid from '@mui/material/Grid';
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../layouts/Footer';
import { FaShareAlt } from 'react-icons/fa';
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
                    <IconButton><FaShareAlt /><span>export</span></IconButton>

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