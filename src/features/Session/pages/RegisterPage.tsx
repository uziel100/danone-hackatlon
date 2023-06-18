import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setCookie } from 'cookies-next';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useError from '@/hooks/useError';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { TOKEN_COOKIE_KEY } from '@/const/general';
import useUserProfile from '../hooks/useUserProfile';
import { useSessionContext } from '../context/SessionContext';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Campo obligatorio'),
  email: Yup.string().email('Formato invalido').required('Campo obligatorio')
});
type FormValues = Yup.InferType<typeof validationSchema>;

const RegisterPage = () => {
  const router = useRouter();
  const { registerUser } = useUserProfile();
  const { logError, showAlert } = useError();
  const { onRegisterUser } = useSessionContext();

  const formik = useFormik<FormValues>({
    initialValues: { email: '', fullName: '' },
    validationSchema,
    onSubmit: async ({ email, fullName }) => {
      try {
        const userCreated = await registerUser({ email, fullName });
        if (userCreated) {
          // save token
          setCookie(TOKEN_COOKIE_KEY, userCreated.token, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
          });
          router.push('/profile').then(() => {
            onRegisterUser(userCreated);
            showAlert.success(`Bienvenido ${userCreated.fullName}`);
          });
        }
      } catch (error) {
        logError(error);
      }
    }
  });

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/images/loginBanner.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Image src="/images/danone02.svg" alt="logo" width={200} height={100} />
          <Typography mt={3} mb={1} component="h1" variant="h6" fontWeight={400} textAlign="center">
            ¡Comparte tu objetivo diario de calorías y descubre recomendaciones de productos personalizadas!
          </Typography>
          <Box mt={4} component="form" noValidate onSubmit={formik.handleSubmit}>
            <TextField
              id="fullName"
              name="fullName"
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              fullWidth
              sx={{
                mb: 2
              }}
              inputProps={{
                'aria-label': 'fullName'
              }}
            />
            <TextField
              id="email"
              name="email"
              label="Correo electrónico"
              type="text"
              placeholder="Correo electrónico"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              sx={{
                mb: 2
              }}
              inputProps={{
                'aria-label': 'email'
              }}
            />

            <Button type="submit" fullWidth color="secondary" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Crear cuenta
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
