import { FC, useState } from 'react';
import Image from 'next/image';
import { Grid, Card, CardContent, Box, Alert, AlertTitle } from '@mui/material';
import { BpButton, BpTypography } from '@/components/shared';
import AddIcon from '@mui/icons-material/Add';
import { ContentfulRichText } from '@/components/common';
import { ProductDetail } from '../models/productModel';
import ModalAddProduct from '../components/ModalAddProduct';

interface Props {
  product: ProductDetail;
}

const ProductDetailPage: FC<Props> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Grid container spacing={4}>
      {openModal && <ModalAddProduct product={product} open={openModal} onClose={() => setOpenModal(false)} />}
      <Grid item xs={12} sm={6} md={5}>
        <Card elevation={0}>
          <CardContent>
            <Image width={480} height={480} src={product.image} alt={product.title} />
            <Box textAlign="right">
              <BpButton startIcon={<AddIcon />} sx={{ mb: 4 }} fullWidth={false} onClick={() => setOpenModal(true)}>
                Agregar
              </BpButton>
            </Box>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <BpTypography fontWeight={600} component="p" variant="body1">
                    Disponible en:
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography component="p" variant="body1">
                    {product.availableIn}gr
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography fontWeight={600} component="p" variant="body1">
                    Valor energético:
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography component="p" variant="body1">
                    {product.energeticValue}Kcal
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography fontWeight={600} component="p" variant="body1">
                    Grasas:
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography component="p" variant="body1">
                    {product.fats}g
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography fontWeight={600} component="p" variant="body1">
                    Hidratos de carbono:
                  </BpTypography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <BpTypography component="p" variant="body1">
                    {product.carbohydrates}g
                  </BpTypography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <CardContent>
          <BpTypography component="h1" variant="h3" mb={2}>
            {product.title}
          </BpTypography>
          {product.isEcoFarming && (
            <Alert severity="success" sx={{ my: 2 }}>
              <AlertTitle>Este es un producto ecológico</AlertTitle>
            </Alert>
          )}
          <ContentfulRichText content={product.descriptionRichText} />
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
