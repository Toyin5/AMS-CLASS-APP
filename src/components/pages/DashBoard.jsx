import React, { useEffect } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Footer from '../layouts/Footer'
import { Box, Button, Grid, Typography } from '@mui/material'
import pic from "../../assets/app.png";
import "../styles/Hero.css"
import { TypeAnimation } from 'react-type-animation'
function DashBoard() {
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate();
    useEffect(() => {
        if (token === null) navigate("/home")
    }, [])

    return (
        <div>
            <Header name={token.course_code} />
            <Box className="heroBox">
                <Grid container spacing={6} className="gridContainer">
                    <Grid item xs={12} md={7}>
                        <Typography variant="h3" fontWeight={700} className="title">
                            Welcome to {" "}
                            <TypeAnimation
                                sequence={[
                                    token.course_name,
                                    1000, // Waits 1s
                                    token._id,
                                    2000, // Waits 2s
                                    "the " + token.course_name + " (" + token._id + ") Dashboard",
                                    3000, // wait 3s
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
                            This class is taken by {token.lecturer_name}.
                            Click the button below to register students.
                        </Typography>
                        <Link to="/app/register">
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ width: '300px', fontSize: '16px' }}
                            >
                                Register Students
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src={pic} alt="My Team" className="largeImage" />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    )
}

export default DashBoard