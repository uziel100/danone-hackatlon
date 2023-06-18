import { FC } from 'react';
import Image from 'next/image';
import { Grid, Card, CardContent, Box } from '@mui/material';
import { BpTypography } from '@/components/shared';
import { ContentfulRichText } from '@/components/common';
import { ProductDetail } from '../models/productModel';

interface Props {
  product: ProductDetail;
}

const ProductDetailPage: FC<Props> = ({ product }) => (
  <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={5}>
      <Card elevation={0}>
        <CardContent>
          <Image width={480} height={480} src={product.image} alt={product.title} />
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
        <ContentfulRichText content={product.descriptionRichText} />
      </CardContent>
    </Grid>
  </Grid>
);

export default ProductDetailPage;
