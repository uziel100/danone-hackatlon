import { FC } from 'react';
import { ModalCommon } from '@/components/common';
import { useSessionContext } from '@/features/Session/context/SessionContext';
import { BpButton, BpTypography } from '@/components/shared';
import { Stack, Alert, AlertTitle } from '@mui/material';
import Image from 'next/image';
import WarningIcon from '@mui/icons-material/Warning';
import { useRouter } from 'next/router';
import { Product } from '../models/productModel';

interface ModalAddProductProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}

const ModalAddProduct: FC<ModalAddProductProps> = ({ open, onClose, product }) => {
  const { user, onSubtractCalories } = useSessionContext();
  const router = useRouter();
  const userCaloriesRemaining: number = user?.settings?.calories.remaining ?? 0;
  const canAddProduct = product.energeticValue <= userCaloriesRemaining;

  const onSubmit = () => {
    onSubtractCalories(product.energeticValue);
    onClose();
  };

  return (
    <ModalCommon open={open}>
      {user ? (
        <>
          <Image src={product.image} alt={product.title} width={100} height={100} />
          <BpTypography mt={1} component="h4" variant="h6" textAlign="center">
            Hola, estas a punto de agregar el producto {product.title} con un valor energético de{' '}
            <span style={{ fontWeight: 700 }}>{product.energeticValue}kcal</span>
          </BpTypography>
          {!canAddProduct && (
            <Alert severity="warning" sx={{ mt: 2 }}>
              <AlertTitle>Este producto supera tu limite restante de calorías</AlertTitle>
              Solo tienes restantes <span style={{ fontWeight: 700 }}>{userCaloriesRemaining}kcal</span>
            </Alert>
          )}
          <Stack mt={8} spacing={2} direction="row" justifyContent="center">
            <BpButton onClick={onClose} variant="outlined" color="secondary">
              Cancelar
            </BpButton>
            <BpButton onClick={onSubmit} disabled={!canAddProduct} variant="contained" color="secondary">
              Agregar
            </BpButton>
          </Stack>
        </>
      ) : (
        <>
          <WarningIcon
            sx={{
              fontSize: 80
            }}
            fontSize="large"
            color="error"
          />
          <BpTypography mt={1} component="h4" variant="h6" textAlign="center">
            Oh no! Parece que no estas registrado, para acceder a esta funcionalidad debes registrarte
          </BpTypography>
          <Stack mt={8} spacing={2} direction="row" justifyContent="center">
            <BpButton onClick={onClose} variant="outlined" color="secondary">
              Cancelar
            </BpButton>
            <BpButton onClick={() => router.push('/register')} variant="contained" color="secondary">
              Registrarse
            </BpButton>
          </Stack>
        </>
      )}
    </ModalCommon>
  );
};
export default ModalAddProduct;
