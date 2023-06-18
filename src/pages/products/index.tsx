import type { ReactElement } from 'react';
import Container from '@mui/material/Container';
import ProductsFilterProvider from '@/features/Products/contexts/results/ProductsFilterProvider';
import ProductsPage from '@/features/Products/pages/ProductsPage';
import LayoutMain from '../../components/layouts/layoutMain/LayoutMain';

const ProductsRootPage = () => (
  <ProductsFilterProvider>
    <Container sx={{ mt: 3 }} maxWidth="lg">
      <ProductsPage />
    </Container>
  </ProductsFilterProvider>
);

ProductsRootPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default ProductsRootPage;
