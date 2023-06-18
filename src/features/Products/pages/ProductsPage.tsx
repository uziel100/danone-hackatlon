import { Box, Card, CardContent, Grid } from '@mui/material';
import { BpTextField, BpTypography } from '@/components/shared';
import ProductCard from '../components/ProductCard';
import useProductFilters from '../hooks/useProductFilters';

const ProductsPage = () => {
  const { products, filters, onChangeFilters } = useProductFilters();
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={3}>
          <Card>
            <CardContent>
              <BpTypography mb={2} textAlign="left" component="p" fontWeight={700} color="primary.main" variant="h5">
                Filters
              </BpTypography>

              <BpTextField
                id="query"
                name="query"
                label="Search"
                value={filters.query}
                onChange={e => {
                  onChangeFilters({
                    query: e.target.value
                  });
                }}
                size="small"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          {/* <Card> */}
          <CardContent>
            <BpTypography textAlign="left" component="p" fontWeight={700} color="primary.main" variant="h5">
              Listado de products
            </BpTypography>
            <Grid mt={2} container spacing={1}>
              {products?.map(product => (
                <Grid key={product.slug} item xs={6} sm={6} md={4}>
                  <ProductCard title={product.title} description="Some description" image={product.image} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          {/* </Card> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
