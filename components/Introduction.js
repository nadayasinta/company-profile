'use client';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

const introductionList = [
    {
        title: 'Who we are',
        label: 'Technology Company',
        description: `Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
        title: 'What we do',
        label: 'Professional Brand Management',
        description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
    },
    {
        title: 'How we do',
        label: 'Strategize, Design, Collaborate',
        description: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.`,
    },
];

export default function Introduction() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = introductionList.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid
            container
            sx={{ backgroundColor: 'background.default' }}
            id='who-we-are'
        >
            <Container maxWidth='md' sx={{ p: '24px' }}>
                <Box
                    sx={{
                        py: '20px',
                        height: 300,
                        width: '100%',
                    }}
                >
                    <Typography
                        component='h2'
                        variant='h2'
                        color='primary.main'
                        sx={{
                            mb: '16px',
                        }}
                    >
                        {introductionList[activeStep].title}
                    </Typography>
                    <Typography
                        component='h5'
                        variant='h4'
                        color='text.primary'
                    >
                        {introductionList[activeStep].label}
                    </Typography>
                    <Typography
                        component='p'
                        variant='body2'
                        color='text.secondary'
                    >
                        {introductionList[activeStep].description}
                    </Typography>
                </Box>
                <MobileStepper
                    variant='text'
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
            </Container>
        </Grid>
    );
}
