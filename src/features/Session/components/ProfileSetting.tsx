import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BpTypography } from '@/components/shared';
import { Box, Card, CardContent, Stack, TextField, Button, Alert } from '@mui/material';
import useError from '@/hooks/useError';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import { useSessionContext } from '../context/SessionContext';

const validationSchema = Yup.object({
  calories: Yup.number().min(1, 'Debe ser un numero positivo').required('Campo obligatorio')
});

type FormValues = Yup.InferType<typeof validationSchema>;

const ProfileSetting = () => {
  const { logError } = useError();
  const router = useRouter();
  const { user, onUpdateCalories, onLogout } = useSessionContext();

  const formik = useFormik<FormValues>({
    initialValues: { calories: 0 },
    validationSchema,
    onSubmit: async ({ calories }) => {
      try {
        onUpdateCalories({
          calories: {
            consumed: 0,
            total: calories,
            remaining: calories
          }
        });
      } catch (error) {
        logError(error);
      }
    }
  });

  const handleLogout = () => {
    router.replace('/').then(() => {
      onLogout();
    });
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        position: 'sticky',
        top: 80
      }}
    >
      <CardContent>
        <Stack justifyContent="space-between" spacing={2}>
          <BpTypography component="p" variant="h5">
            Bienvenido
          </BpTypography>
          <Button startIcon={<LogoutIcon />} onClick={handleLogout} variant="text" fullWidth={false} color="error">
            Cerrar sesión
          </Button>
        </Stack>
        <BpTypography component="p" variant="h6">
          {user?.fullName}
        </BpTypography>
        <BpTypography mt={3} component="p" fontWeight={600} variant="h6">
          Tu límite de calorías
        </BpTypography>
        <Stack my={2} direction="row" justifyContent="space-between">
          <Box sx={{ borderRadius: 2, bgcolor: 'primary.50', p: 2, textAlign: 'center' }}>
            <BpTypography fontWeight={700} component="p" variant="h5">
              {user?.settings?.calories.consumed || 0}Kcal
            </BpTypography>
            <BpTypography color="text.primary" fontWeight={400} component="p" variant="body1">
              Consumidas
            </BpTypography>
          </Box>
          <Box sx={{ borderRadius: 2, bgcolor: 'primary.50', p: 2, textAlign: 'center' }}>
            <BpTypography fontWeight={700} component="p" variant="h5">
              {(user?.settings?.calories.total || 0) - (user?.settings?.calories.consumed || 0)}Kcal
            </BpTypography>
            <BpTypography color="text.primary" fontWeight={400} component="p" variant="body1">
              Restante
            </BpTypography>
          </Box>
          <Box sx={{ borderRadius: 2, bgcolor: 'primary.50', p: 2, textAlign: 'center' }}>
            <BpTypography fontWeight={700} component="p" variant="h5">
              {user?.settings?.calories.total || 0}Kcal
            </BpTypography>
            <BpTypography color="text.primary" fontWeight={400} component="p" variant="body1">
              Totales
            </BpTypography>
          </Box>
        </Stack>
        <Box mt={6} component="form" onSubmit={formik.handleSubmit}>
          <Alert severity="info" sx={{ mb: 2 }}>
            Recuerda que el límite de calorías es diario
          </Alert>
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
              mb: 4
            }}
            inputProps={{
              'aria-label': 'calories'
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Guardar cambios
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ProfileSetting;
