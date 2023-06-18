import { FC } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardProduct from '@/features/Home/components/CardProduct';
import { useRouter } from 'next/router';
import { ProductCard } from '../models/productModel';

interface Props {
  products: ProductCard[];
}

const SectionProducts: FC<Props> = ({ products }) => {
  const router = useRouter();

  return (
    <Container sx={{ py: 14 }} maxWidth="lg">
      <Typography mb={6} fontWeight={600} variant="h4" align="left" color="text.primary" gutterBottom>
        Explora nuestros productos
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item key={product.slug} xs={12} sm={4} md={3}>
            <CardProduct
              onClick={() => router.push(`/products/${product.slug}`)}
              title={product.title}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SectionProducts;
