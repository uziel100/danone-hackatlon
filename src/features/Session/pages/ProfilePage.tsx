import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BpTypography } from '@/components/shared';
import { Container, Box, Grid, Card, CardContent, Stack, TextField, Button } from '@mui/material';
import useError from '@/hooks/useError';
import { useSessionContext } from '../context/SessionContext';

const validationSchema = Yup.object({
  calories: Yup.number().required('Campo obligatorio')
});

type FormValues = Yup.InferType<typeof validationSchema>;

const ProfilePage = () => {
  const { logError } = useError();
  const { user, onUpdateCalories } = useSessionContext();

  const formik = useFormik<FormValues>({
    initialValues: { calories: 0 },
    validationSchema,
    onSubmit: async ({ calories }) => {
      try {
        console.log({ calories });
        onUpdateCalories({
          calories: {
            consumed: 0,
            total: calories
          }
        });
      } catch (error) {
        logError(error);
      }
    }
  });

  return (
    <Box height="calc(100vh - 80px)">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <BpTypography component="p" variant="h5">
                  Bienvenido
                </BpTypography>
                <BpTypography component="p" variant="h6">
                  {user?.fullName}
                </BpTypography>
                <BpTypography component="p" variant="h6">
                  Your maximum kcal limit
                </BpTypography>

                <Stack my={2} direction="row" justifyContent="space-between">
                  <Box sx={{ border: '1px solid black' }}>
                    <BpTypography component="p" variant="h6">
                      {user?.settings?.calories.consumed || 0}
                    </BpTypography>
                    <BpTypography component="p" variant="h6">
                      Consumed
                    </BpTypography>
                  </Box>
                  <Box sx={{ border: '1px solid black' }}>
                    <BpTypography component="p" variant="h6">
                      {(user?.settings?.calories.total || 0) - (user?.settings?.calories.consumed || 0)}
                    </BpTypography>
                    <BpTypography component="p" variant="h6">
                      Remaining
                    </BpTypography>
                  </Box>
                  <Box sx={{ border: '1px solid black' }}>
                    <BpTypography component="p" variant="h6">
                      {user?.settings?.calories.total || 0}
                    </BpTypography>
                    <BpTypography component="p" variant="h6">
                      Limit
                    </BpTypography>
                  </Box>
                </Stack>
                <Box component="form" onSubmit={formik.handleSubmit}>
                  <TextField
                    id="calories"
                    name="calories"
                    label="Calorías"
                    type="number"
                    placeholder="Calorías"
                    value={formik.values.calories}
                    onChange={formik.handleChange}
                    error={formik.touched.calories && Boolean(formik.errors.calories)}
                    helperText={formik.touched.calories && formik.errors.calories}
                    fullWidth
                    sx={{
                      mb: 2
                    }}
                    inputProps={{
                      'aria-label': 'calories'
                    }}
                  />
                  <Button type="submit" variant="contained" color="secondary" fullWidth>
                    Guardar cambios
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Card>
              <CardContent>Informacion del usuario</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ProfilePage;
