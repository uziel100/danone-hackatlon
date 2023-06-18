import type { ReactElement } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ProductCard } from '@/features/Home/models/productModel';
import SectionHero from '@/features/Home/components/SectionHero';
import SectionFooter from '@/features/Home/components/SectionFooter';
import SectionAbout from '@/features/Home/components/SectionAbout';
import { useSessionContext } from '@/features/Session/context/SessionContext';
import SectionProducts from '@/features/Home/components/SectionProducts';
import getProductsService from '@/features/Home/services/getProductsService';
import { productCardAdapter } from '@/features/Home/adapters/productAdapter';
import { addApolloState, initializeApollo } from '../utils';
import LayoutMain from '../components/layouts/layoutMain/LayoutMain';

type DataSsrProps = {
  products: ProductCard[];
};

export const getServerSideProps: GetServerSideProps<DataSsrProps> = async () => {
  const apolloClient = initializeApollo();

  const response = await getProductsService(apolloClient, {
    limit: 4
  });

  const products = response?.items.map(productCardAdapter);

  return addApolloState(apolloClient, {
    props: { products }
  });
};

const HomePage = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user } = useSessionContext();

  return (
    <>
      <SectionHero showButtonRegister={!user} />
      <SectionAbout />
      <SectionProducts products={products} />
      <SectionFooter />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default HomePage;
