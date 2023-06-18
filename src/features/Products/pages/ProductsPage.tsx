import { Box, Grid } from '@mui/material';
import useProductFilters from '../hooks/useProductFilters';
import ProductList from '../components/ProductList';
import ProductFilters from '../components/ProductFilters';

const ProductsPage = () => {
  const { products, onChangeFilters, loading, showLoadMore, onFetchMore, loadingFetchingMore } = useProductFilters();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} md={3}>
          <ProductFilters onChangeFilters={onChangeFilters} />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <ProductList
            loading={loading}
            loadingFetchingMore={loadingFetchingMore}
            showLoadMore={showLoadMore}
            onFetchMore={onFetchMore}
            products={products}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
