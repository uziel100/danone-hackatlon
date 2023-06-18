import type { ReactElement } from 'react';
import Container from '@mui/material/Container';
import ProductsFilterProvider from '@/features/Products/contexts/results/ProductsFilterProvider';
import { LayoutMain } from '@/components/layouts';
import ProductDetailPage from '@/features/Products/pages/ProductDetailPage';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { addApolloState, initializeApollo } from '@/utils/apolloClient';
import { getProductService } from '@/features/Products/services';
import { productDetailAdapter } from '@/features/Products/adapters/productAdapter';
import { Product } from '@/typesGQL/graphql';
import { ProductDetail } from '@/features/Products/models/productModel';

type DataSsrProps = {
  product: ProductDetail;
};

export const getServerSideProps: GetServerSideProps<DataSsrProps> = async ({ query }) => {
  const apolloClient = initializeApollo();
  const productSlug: string = query?.slug?.toString() || '';

  if (!productSlug) {
    return {
      notFound: true
    };
  }
  const response = await getProductService(apolloClient, {
    limit: 1,
    where: {
      slug: productSlug
    }
  });

  if (!response?.items.length) {
    return {
      notFound: true
    };
  }

  const productDetail = productDetailAdapter(response?.items[0] as Product);

  return addApolloState(apolloClient, {
    props: { product: productDetail }
  });
};

const ProductRootDetailPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <ProductsFilterProvider>
    <Container sx={{ mt: 3 }} maxWidth="lg">
      <ProductDetailPage product={product} />
    </Container>
  </ProductsFilterProvider>
);

ProductRootDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default ProductRootDetailPage;
