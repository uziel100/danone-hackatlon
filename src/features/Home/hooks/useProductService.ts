import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { getErrorMessage } from '@/utils/index';
import { ProductCollectionQueryVariables } from '@/typesGQL/graphql';
import getProductsService from '../services/getProductsService';
import { productCardAdapter } from '../adapters/productAdapter';
import { ProductCard } from '../models/productModel';

const useProductService = () => {
  const apolloClient = useApolloClient();

  const getProducts = useCallback(
    async (variables: ProductCollectionQueryVariables): Promise<ProductCard[]> => {
      try {
        const response = await getProductsService(apolloClient, variables, { fetchPolicy: 'no-cache' });
        if (response?.items === undefined) return [];
        const products = response?.items.map(productCardAdapter);
        return products ?? [];
      } catch (error) {
        throw new Error(getErrorMessage(error));
      }
    },
    [apolloClient]
  );

  return {
    getProducts
  };
};

export default useProductService;
