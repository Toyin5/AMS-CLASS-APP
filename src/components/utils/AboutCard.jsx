import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import pic from "../../assets/me.jpg"
import { Link } from 'react-router-dom'
import "../styles/About.css"

function Hero() {
    return (
        <Box className="container">
            <Grid container spacing={6} className="gridContainer">
                <Grid item xs={12} md={5}>
                    <img src={pic} alt="My Team" className="largeImage" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" fontWeight={700} className="title">
                        Meet the Team
                    </Typography>
                    <Typography variant="h6" className="subtitle">
                        FOMULA
                    </Typography>
                    <Link to="/register">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: '200px', fontSize: '16px' }}
                        >
                            Contact US
                        </Button>
                    </Link>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Hero