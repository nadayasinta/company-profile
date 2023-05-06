'use client';

import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function AppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppBar position='sticky' color='inherit'>
                <Toolbar>
                    <Grid component='div' sx={{ flexGrow: 1 }}>
                        <Image
                            src='/company-logo.png'
                            width={160}
                            height={32}
                            alt='company'
                        />
                    </Grid>

                    <IconButton
                        size='large'
                        edge='end'
                        color='black'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
}
