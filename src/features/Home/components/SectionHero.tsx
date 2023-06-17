import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const SectionHero = () => (
  <Box
    bgcolor="primary.50"
    height={560}
    sx={{
      backgroundImage: 'linear-gradient(to right, #fff 40%, transparent 70%), url(/images/banner-danone.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom right',
      backgroundAttachment: 'fixed'
    }}
  >
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left'
      }}
      maxWidth="lg"
    >
      <Box width="100%">
        <Typography
          maxWidth={580}
          component="h1"
          variant="h4"
          fontWeight={600}
          align="left"
          color="primary.900"
          gutterBottom
        >
          ¡Descubre nuestra Exquisita Gama de Productos Ecológicos y Saludables de Danone!
        </Typography>
        <Typography maxWidth={480} variant="body2" align="left" color="text.primary" paragraph>
          Explora nuestra exquisita gama ecológica y saludable de Danone. Deliciosos sabores que cuidan de ti y del
          planeta. ¡Descubre una experiencia única!
        </Typography>
        <Button
          size="large"
          sx={{
            borderRadius: 9
          }}
          variant="contained"
        >
          Ver productos
        </Button>
      </Box>
    </Container>
  </Box>
);
export default SectionHero;
