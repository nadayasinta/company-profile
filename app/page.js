'use client';
import AppBar from '@/components/AppBar';
import Introduction from '@/components/Introduction';
import Heading from '@/components/Heading';
import CoreValues from '@/components/CoreValues';
import Speciality from '@/components/Speciality';
import Contact from '@/components/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4097DB',
            light: '#029FE4',
            dark: '#07477A',
        },
    },
    typography: {
        h2: {
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '30px',
        },
        h3: {
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '38px',
        },
        h4: {
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '38px',
        },
        body1: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
        },
        body2: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
        },
    },
});

export default function Home() {
    return (
        <main>
            <ThemeProvider theme={theme}>
                <AppBar />
                <Heading />
                <Introduction />
                <CoreValues />
                <Speciality />
                <Contact />
            </ThemeProvider>
        </main>
    );
}
