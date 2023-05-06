'use client';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Image from 'next/image';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const departmentContactList = [
    {
        title: 'TECHNOLOGY DEPARTMENT',
        address: (
            <>
                Jl. Lembong No 8<br />
                Kel. Braga Kec. Sumur Bandung, <br />
                Kota Bandung, <br />
                Jawa Barat
            </>
        ),
    },
    {
        title: 'HUMAN RESOURCE DEPARTMENT',
        address: (
            <>
                Jl. Lembong No 9<br />
                Kel. Braga Kec. Sumur Bandung, <br />
                Kota Bandung, <br />
                Jawa Barat
            </>
        ),
    },
];

const subMenu = [
    {
        title: 'Who We Are',
        componentId: '#who-we-are',
    },
    {
        title: 'Our Values',
        componentId: '#our-values',
    },
    {
        title: 'The Perks',
        componentId: '#the-perks',
    },
];

export default function Contact() {
    const [selectedDepartment, setSelectedDepartment] = useState(0);

    const handleChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    return (
        <Grid
            container
            sx={{
                backgroundColor: 'primary.dark',
                position: 'relative',
            }}
        >
            <Container maxWidth='md' sx={{ p: '56px 24px  120px', zIndex: 1 }}>
                <Grid item xs={12} sx={{ mb: '32px' }}>
                    <Image
                        src='/company-logo-white.png'
                        width={160}
                        height={32}
                        alt='company logo 2'
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        mb: '48px',
                        backgroundColor: 'background.default',
                        p: '24px',
                    }}
                >
                    <FormControl fullWidth>
                        <Select
                            labelId='select-label'
                            id='select'
                            value={selectedDepartment}
                            onChange={handleChange}
                        >
                            {departmentContactList.map((item, index) => (
                                <MenuItem key={item.title} value={index}>
                                    {item.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography
                        component='p'
                        variant='h4'
                        color='primary.main'
                        sx={{ my: '24px' }}
                    >
                        {departmentContactList[selectedDepartment].address}
                    </Typography>
                </Grid>
                {subMenu.map((item) => (
                    <Grid item key={item.title} xs={12} sx={{ my: '20px' }}>
                        <Link
                            href={item.componentId}
                            color='#fff'
                            sx={{ textDecoration: 'none' }}
                        >
                            {item.title}
                        </Link>
                    </Grid>
                ))}
            </Container>
            <Grid
                item
                xs={12}
                container
                sx={{
                    backgroundColor: 'primary.main',
                    position: 'absolute',
                    bottom: '0',
                    height: '250px',
                    background:
                        'linear-gradient(to bottom left, transparent 0%, transparent 50%, #08385F 50%, #08385F 100%)',
                }}
            ></Grid>
            <Grid
                item
                xs={12}
                container
                sx={{
                    backgroundColor: 'primary.main',
                    position: 'absolute',
                    bottom: '0',
                    height: '200px',
                    background:
                        'linear-gradient(to bottom right, transparent 0%, transparent 50%, #14619D 50%, #14619D 100%)',
                }}
            ></Grid>
        </Grid>
    );
}
