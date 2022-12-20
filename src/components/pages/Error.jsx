import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Header from './Header'
import pic from "../../assets/error.jpg"
function Error() {
    return (
        <>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    minHeight: "100vh"
                }}
            >
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Typography variant='h1'>
                                404
                            </Typography>
                            <Typography variant='h6'>
                                The page you are looking for doesn't exist.
                            </Typography>
                            <Typography variant='h6'>
                                You can try opening the site on a new tab.
                            </Typography>
                            <Link to="/app" ><Button variant='contained' color='error'>Go back HOME</Button></Link>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img src={pic} alt="My Team" style={{
                                width: '100%'
                            }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Error