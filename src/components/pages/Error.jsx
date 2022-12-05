import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Error() {
    return (
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
                        <Link to="/app" ><Button variant='contained'>Go back HOME</Button></Link>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant='h1'>
                            404
                        </Typography>
                        <Typography variant='h6'>
                            Error!
                        </Typography>
                        <Button variant='contained'>Go back HOME</Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default Error