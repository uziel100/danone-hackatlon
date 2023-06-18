import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setCookie } from 'cookies-next';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useError from '@/hooks/useError';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import useUserProfile from '../hooks/useUserProfile';
import { useSessionContext } from '../context/SessionContext';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Campo obligatorio'),
  email: Yup.string().email('Formato invalido').required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio')
});
type FormValues = Yup.InferType<typeof validationSchema>;

const LoginPage = () => {
  const router = useRouter();
  const { registerUser } = useUserProfile();
  const { logError, showAlert } = useError();
  const { onRegisterUser } = useSessionContext();

  const formik = useFormik<FormValues>({
    initialValues: { email: '', password: '', fullName: '' },
    validationSchema,
    onSubmit: async ({ email, password, fullName }) => {
      try {
        const userCreated = await registerUser({ email, password, fullName });
        if (userCreated) {
          // save token
          setCookie('token', userCreated.token, {
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box mt={4} component="form" noValidate onSubmit={formik.handleSubmit}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              type="text"
              placeholder="fullName"
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
              label="Email"
              type="text"
              placeholder="email"
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
            <TextField
              id="password"
              name="password"
              label="Contraseña"
              type="text"
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              sx={{
                mb: 2
              }}
              inputProps={{
                'aria-label': 'password'
              }}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
