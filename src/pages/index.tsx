import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useProductService from '@/features/Home/hooks/useProductService';
import { ProductCard } from '@/features/Home/models/productModel';
import SectionHero from '@/features/Home/components/SectionHero';
import SectionFooter from '@/features/Home/components/SectionFooter';
import CardProduct from '@/features/Home/components/CardProduct';
import LayoutMain from '../components/layouts/layoutMain/LayoutMain';

const HomePage = () => {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const { getProducts } = useProductService();

  useEffect(() => {
    getProducts({})
      .then(res => {
        setProducts(res);
      })
      .then(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SectionHero />
      <Container sx={{ py: 12 }} maxWidth="lg">
        <Typography mb={4} fontWeight={600} variant="h4" align="left" color="text.primary" gutterBottom>
          Productos
        </Typography>
        <Grid container spacing={4}>
          {products.map(card => (
            <Grid item key={card.slug} xs={12} sm={6} md={4}>
              <CardProduct title={card.title} description="some description" image={card.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <SectionFooter />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default HomePage;
