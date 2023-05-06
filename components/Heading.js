'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Heading() {
    return (
        <Grid container sx={{ backgroundColor: 'primary.main' }}>
            <Grid
                item
                xs={12}
                sx={{
                    backgroundColor: 'primary.light',
                    height: '300px',
                    objectFit: 'contain',
                    position: 'relative',
                }}
            >
                <Image src='/home.png' fill={true} alt='Pcompany home image' />
                <Grid
                    item
                    xs={12}
                    container
                    sx={{
                        position: 'absolute',
                        bottom: '0',
                        height: '120px',
                        background:
                            'linear-gradient(to bottom right, transparent 0%, transparent 50%, #53A7E9 50%, #53A7E9 100%)',
                    }}
                ></Grid>
                <Grid
                    item
                    xs={12}
                    container
                    sx={{
                        position: 'absolute',
                        bottom: '0',
                        height: '140px',
                        background:
                            'linear-gradient(to bottom left, transparent 0%, transparent 50%, #4097DB 50%, #4097DB 100%)',
                    }}
                ></Grid>
            </Grid>
            <Container maxWidth='md' sx={{ p: '36px 40px 72px' }}>
                <Grid
                    item
                    xs={12}
                    container
                    sx={{
                        position: 'relative',
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{
                            mb: '16px',
                        }}
                    >
                        <Typography component='h2' variant='h2'>
                            Discover Your Wonder
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component='p' variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}
