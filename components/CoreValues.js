'use client';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Container from '@mui/material/Container';
import MinimizeIcon from '@mui/icons-material/Minimize';

const valueList = [
    {
        title: 'Dedication',
        description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.`,
    },
    {
        title: 'Intellectual Honesty',
        description: `Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.`,
    },
    {
        title: 'Curiosity',
        description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`,
    },
];

export default function CoreValues() {
    return (
        <Grid container sx={{ backgroundColor: '#F8F8F8' }} id='our-values'>
            <Container maxWidth='md' sx={{ p: '56px 24px' }}>
                <Grid item xs={12} sx={{ mb: '32px' }}>
                    <Typography
                        component='h2'
                        variant='h2'
                        color='primary.main'
                        align='center'
                        sx={{ mb: '24px' }}
                    >
                        Our Core Values
                    </Typography>
                    <Typography
                        component='p'
                        variant='body1'
                        color='text.secondary'
                    >
                        Ridiculus laoreet libero pretium et, sit vel elementum
                        convallis fames. Sit suspendisse etiam eget egestas.
                        <br />
                        <br />
                        Aliquet odio et lectus etiam sit. In mauris rutrum ac ut
                        volutpat, ornare nibh diam. Montes, vitae, nec amet
                        enim.
                    </Typography>
                </Grid>
                {valueList.map((item) => (
                    <Grid item container xs={12} key={item.title}>
                        <Grid item>
                            <MinimizeIcon sx={{ color: 'text.secondary' }} />
                        </Grid>
                        <Grid item xs sx={{ mb: '24px', pl: '16px' }}>
                            <Typography
                                component='h3'
                                variant='h3'
                                color='text.primary'
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                component='p'
                                variant='body1'
                                color='text.secondary'
                            >
                                {item.description}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}

                <Grid item xs={12} align='center'>
                    <Image
                        src='/core-values.png'
                        width={520}
                        height={300}
                        alt='core values'
                    />
                </Grid>
            </Container>
        </Grid>
    );
}
