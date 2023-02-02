import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/About.css"

function Hero() {
    return (
        <Box className="container">
            <Grid container spacing={6} className="gridContainer">
                <Grid item xs={12} >
                    <Typography variant="h6" className="title">
                        AMS is a pair of two web applications that utilize QR code in attendance taking.
                    </Typography>
                    <Typography variant="h6" className="subtitle">
                        This is the class app for the lecturers where attendance are managed.
                        Go to this <a target="_blank" href="https://ams-student-app.netlify.app">link</a> to check the student app
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero