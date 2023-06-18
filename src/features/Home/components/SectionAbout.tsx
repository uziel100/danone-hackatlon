import { Typography, Box, Stack, CardContent, Button } from '@mui/material';
import { useRouter } from 'next/router';

const SectionAbout = () => {
  const router = useRouter();

  return (
    <Box bgcolor="primary.400">
      <Stack direction="row">
        <Box
          width={{
            xs: '20%',
            sm: '40%',
            md: '50%'
          }}
          height="480px"
          sx={{
            backgroundImage: 'url(/images/trackingApp.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width={{
            xs: '80%',
            sm: '60%',
            md: '50%'
          }}
          height="480px"
        >
          <CardContent>
            <Typography maxWidth={520} mb={3} fontWeight={600} variant="h5" align="left" color="white" gutterBottom>
              ¡Cuéntanos tu aporte calórico máximo diario y te recomendaremos los productos que mejor se adaptan a tus
              objetivos!
            </Typography>
            <Button onClick={() => router.push('/register')} variant="contained" color="primary">
              ¡Comienza ahora!
            </Button>
          </CardContent>
        </Box>
      </Stack>
      <Stack direction="row">
        <Box
          display="flex"
          textAlign="center"
          justifyContent="center"
          flexDirection="column"
          width={{
            xs: '80%',
            sm: '60%',
            md: '50%'
          }}
          height="480px"
        >
          <CardContent
            sx={{
              width: '100%',
              px: {
                xs: 2,
                sm: 4,
                md: 8
              }
            }}
          >
            <Typography textAlign="center" fontWeight={600} variant="h5" color="white" gutterBottom>
              Mantén un seguimiento de tus calorías diarias con los productos de Danone, ¡tu aliado en la comida
              saludable!
            </Typography>
          </CardContent>
        </Box>
        <Box
          width={{
            xs: '20%',
            sm: '40%',
            md: '50%'
          }}
          height="480px"
          sx={{
            backgroundImage: 'url(/images/danone03.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
      </Stack>
    </Box>
  );
};
export default SectionAbout;
