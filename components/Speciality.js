'use client';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Image from 'next/image';

const specialityList = [
    {
        title: 'Accessories',
        image: '/speciality-1.png',
        description: `Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
        title: 'Speed Improvement',
        image: '/speciality-2.png',
        description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
    },
    {
        title: 'Exhaust',
        image: '/speciality-3.png',
        description: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.`,
    },
];

export default function Speciality() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = specialityList.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid id='the-perks' container sx={{ backgroundColor: 'primary.main' }}>
            <Container maxWidth='md' sx={{ p: '56px 24px' }}>
                <Grid
                    item
                    xs={12}
                    container
                    sx={{
                        backgroundColor: 'background.default',
                        p: '44px 32px',
                    }}
                >
                    <Grid item xs={12} sx={{ mb: '32px' }}>
                        <Typography
                            component='h2'
                            variant='h2'
                            color='primary.main'
                            align='center'
                            sx={{ mb: '24px' }}
                        >
                            OUR SPECIALITY
                        </Typography>
                        <Typography
                            component='p'
                            variant='body1'
                            color='text.secondary'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis euismod libero vel leo auctor, in
                            venenatis nulla consequat. Sed commodo nunc sit amet
                            congue aliquam.
                        </Typography>
                    </Grid>
                    <Box sx={{ maxWidth: 450, margin: 'auto' }}>
                        <Box
                            sx={{
                                p: '40px',
                                height: 350,
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Image
                                src={specialityList[activeStep].image}
                                width={120}
                                height={120}
                                alt={specialityList[activeStep].title}
                            />
                            <Typography
                                component='h5'
                                variant='h4'
                                color='text.primary'
                                sx={{
                                    mb: '16px',
                                }}
                            >
                                {specialityList[activeStep].title}
                            </Typography>
                            <Typography
                                component='p'
                                variant='body2'
                                color='text.secondary'
                            >
                                {specialityList[activeStep].description}
                            </Typography>
                        </Box>
                        <MobileStepper
                            steps={maxSteps}
                            position='static'
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size='small'
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    {theme.direction === 'rtl' ? (
                                        <ArrowBackIcon />
                                    ) : (
                                        <ArrowForwardIcon />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    size='small'
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                >
                                    {theme.direction === 'rtl' ? (
                                        <ArrowForwardIcon />
                                    ) : (
                                        <ArrowBackIcon />
                                    )}
                                </Button>
                            }
                        />
                    </Box>
                </Grid>
            </Container>
        </Grid>
    );
}
