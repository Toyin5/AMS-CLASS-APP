import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import pic from "../../assets/hero.svg"
import { Link } from 'react-router-dom'
import "../styles/Hero.css"
import { TypeAnimation } from 'react-type-animation'

function Hero() {
    return (
        <Box className="heroBox">
            <Grid container spacing={6} className="gridContainer">
                <Grid item xs={12} md={7}>
                    <Typography variant="h3" fontWeight={700} className="title">
                        Welcome to the
                        <TypeAnimation
                            sequence={[
                                "AMS Homepage",
                                1000, // Waits 1s
                                "Attendance",
                                2000, // Waits 2s
                                "Attendance Management",
                                3000, // wait 3s
                                "Attendance Management System",
                                4000, // 4s
                                "Attendance Management System Homepage",
                                5000, //5s
                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={4}
                            style={{ fontSize: '1em' }}
                        />
                    </Typography>
                    <Typography variant="h6" className="subtitle">
                        Attendance is an important part of an organization.
                        Manage your class attendance easily using QR codes.
                        Click the button below to get started
                    </Typography>
                    <Link to="/register">
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ width: '200px', fontSize: '16px' }}
                        >
                            Get started
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src={pic} alt="My Team" className="largeImage" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero