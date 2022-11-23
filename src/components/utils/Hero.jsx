import { Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <Container className='hero'>
            <h1>Welcome to the Attendance Management System Homepage</h1>
            <p>Manage your class attendance easily using QR codes</p>
            <p>Click the button below to get started</p>
            <Link to="/register"><Button>Get started</Button></Link>
        </Container>
    )
}

export default Hero