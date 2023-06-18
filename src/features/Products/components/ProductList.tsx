import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BpButton, BpTypography } from '@/components/shared';
import { useRouter } from 'next/router';
import { Product } from '../models/productModel';
import ProductCardSkeleton from './ProductCardSkeleton';
import ProductCard from './ProductCard';

interface Props {
  loading: boolean;
  products: Product[] | null;
  showLoadMore: boolean;
  loadingFetchingMore: boolean;
  onFetchMore: () => void;
}

const ProductList: FC<Props> = ({ loading, products, loadingFetchingMore, showLoadMore, onFetchMore }) => {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={3}>
        {loading &&
          new Array(12).fill(0).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid key={index} item xs={6} sm={6} md={4}>
              <ProductCardSkeleton />
            </Grid>
          ))}
        {products?.map(product => (
          <Grid key={product.slug} item xs={6} sm={6} md={4}>
            <ProductCard
              onClick={() => router.push(`/products/${product.slug}`)}
              title={product.title}
              description="Some description"
              image={product.image}
            />
          </Grid>
        ))}
        {products?.length === 0 && (
          <Grid item xs={12}>
            <BpTypography component="h4" variant="h5" mt={6} textAlign="center">
              No se encontraron resultados
            </BpTypography>
          </Grid>
        )}
      </Grid>
      {showLoadMore && (
        <Box width="100%" mt={5} display="flex" justifyContent="center">
          <BpButton
            loading={loadingFetchingMore}
            fullWidth={false}
            onClick={onFetchMore}
            variant="contained"
            color="primary"
          >
            Cargar más
          </BpButton>
        </Box>
      )}
    </>
  );
};
export default ProductList;
