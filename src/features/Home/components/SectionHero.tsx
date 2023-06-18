import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

interface Props {
  showButtonRegister: boolean;
}

const SectionHero: FC<Props> = ({ showButtonRegister }) => {
  const router = useRouter();

  return (
    <Box
      bgcolor="primary.50"
      height={{
        xs: 460,
        sm: 560
      }}
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
            maxWidth={560}
            component="h1"
            variant="h4"
            fontWeight={600}
            textAlign={{
              xs: 'center',
              sm: 'left'
            }}
            color="primary.900"
            gutterBottom
          >
            ¡Descubre nuestra Exquisita Gama de Productos Ecológicos y Saludables de Danone!
          </Typography>
          <Typography
            maxWidth={480}
            variant="body2"
            fontWeight={400}
            textAlign={{
              xs: 'center',
              sm: 'left'
            }}
            color="text.primary"
            paragraph
          >
            ¡Obtén las mejores recomendaciones de productos basadas en tu meta de calorías diarias!
          </Typography>
          <Stack
            justifyContent={{
              xs: 'center',
              sm: 'left'
            }}
            gap={2}
            mt={4}
          >
            <Button
              size="large"
              sx={{
                borderRadius: 9
              }}
              variant={showButtonRegister ? 'outlined' : 'contained'}
              color="primary"
              onClick={() => router.push('/products')}
            >
              Ver productos
            </Button>
            {showButtonRegister && (
              <Button
                size="large"
                sx={{
                  borderRadius: 9
                }}
                color="secondary"
                variant="contained"
                onClick={() => router.push('/register')}
              >
                Regístrate
              </Button>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default SectionHero;
